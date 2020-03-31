const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const Rx = require('rxjs/Rx');
const http = require('http');
const config = require('../config');

const fetchResponse = () => {
  return new Promise((res, rej) => {
    try {
      const req = http.request(`http://localhost:${config.dev.port}/#/`, response => res(response.statusCode));
      req.on('error', (err) => rej(err));
      req.end();
    } catch (err) {
      rej(err);
    }
  });
};

const waitForServerReachable = () => {
  return Rx.Observable
    .interval(1000)
    .mergeMap(async () => {
      try {
        const statusCode = await fetchResponse();
        if (statusCode === 200) return true;
      } catch (err) {}
      return false;
    })
    .filter(ok => !!ok);
};

const timedOut = timeout => {
  return new Promise(res => {
    setTimeout(res, timeout);
  });
};

const convert = async () => {
  await waitForServerReachable().first().toPromise();
  console.log('Connected to server ...');
  console.log('Exporting ...');
  try {
    const directories = getResumesFromDirectories();
    directories.forEach(async (dir) => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      });
      const page = await browser.newPage();
      await page.goto(`http://localhost:${config.dev.port}/#/resume/` + dir.name, {
        waitUntil: 'networkidle2'
      });
      await page.pdf({
        path: path.join(__dirname, '../pdf/' + dir.name + '.pdf'),
        width: '21cm',
      	height: '41.5cm',
      	pageRanges: '1' /* Try to figure out, specific W and H for each CV (if not set, default) */
      });
      await browser.close();
    });
  } catch (err) {
    throw new Error(err);
  }
  console.log('Finished exports.');
};

const getResumesFromDirectories = () => {
  const directories = getDirectories();
  return directories
    .map(dir => {
      let fileName = dir.replace('.vue', '');
      return {
        path: fileName,
        name: fileName
      };
    });
};

const getDirectories = () => {
  const srcpath = path.join(__dirname, '../src/resumes');
  return fs.readdirSync(srcpath)
    .filter(file => file !== 'resumes.js' && file !== 'template.vue' && file !== 'options.js');
};

convert();
