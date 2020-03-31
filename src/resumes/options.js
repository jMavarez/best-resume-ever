import yaml from 'js-yaml';
import { PERSON } from '../../resume/data-en.yml';
// import { PERSON } from '../../resume/data-es.yml';
import {
  terms
} from '../terms';

// Called by templates to decrease redundancy
function getVueOptions (name) {
  let opt = {
    name: name,
    data () {
      return {
        person: yaml.load(PERSON),
        terms: terms,
        calcAge: function (date) {
          let birth = new Date(date.year, date.month - 1, date.day);
          let diff = Date.now() - birth.getTime();
          let diffDate = new Date(diff);
          return Math.abs(diffDate.getUTCFullYear() - 1970);
        }
      };
    },
    computed: {
      lang () {
        const defaultLang = this.terms.en;
        const useLang = this.terms[this.person.lang];

        // overwrite non-set fields with default lang
        Object.keys(defaultLang)
          .filter(k => !useLang[k])
          .forEach(k => {
            console.log(k);
            useLang[k] = defaultLang[k];
          });

        return useLang;
      }
    }
  };
  return opt;
}

export {
  getVueOptions
};
