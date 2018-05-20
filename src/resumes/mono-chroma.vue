<template>
<div class="resume" id="template">
  <div class="black-bar">
    <div class="row text-center">
      <span class="name">{&nbsp;&nbsp;{{person.name.first}}{{person.name.last}}&nbsp;&nbsp;}</span>
    </div>
    <div class="row text-center">
      <p class="p-position center">{{person.position}}</p>
    </div>
    <!-- <div id="contact" class="row">
      <div class="section-four">
        <div class="quater">
          <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
          <a :href="'mailto:'+person.contact.email" target="_blank">{{person.contact.email}}</a>
        </div>
        <div class="quater text-center">
          <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
          <a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
        </div>
        <div class="quater text-center">
          <i class="fa fa-github" aria-hidden="true"></i>&nbsp;
          <a :href="'https://github.com/'+person.contact.github" target="_blank">{{person.contact.github}}</a>
        </div>
        <div class="quater text-center">
          <i class="fa fa-bitbucket" aria-hidden="true"></i>&nbsp;
          <a :href="'https://bitbucket.org/'+person.contact.bitbucket" target="_blank">{{person.contact.bitbucket}}</a>
        </div>
      </div>
    </div> -->
  </div>
  <div id="apps_libs-container">
    <div id="apps_libs-title" class="bold uppercase">Open Source</div>
    <div class="section-bar">
      <div class="left">
        <span class="bold uppercase">APPLICATIONS AND LIBRARIES</span>
      </div>
    </div>
    <div class="apps_libs" v-for="project in person.apps_libs" :key="project.title">
      <div><a target="_blank" v-bind:href="project.link">{{project.title}}</a></div>
      <div>{{project.description}}</div>
    </div>
  </div>
  <div id="experience-container">
    <div id="experience-title" class="bold uppercase">PROFESSIONAL EXPERIENCE</div>
    <div class="experience" v-for="experience in person.experience" :key="experience.company">
      <div class="wrapper">
        <div class="section-bar">
          <div class="left">
            <span class="bold uppercase position">{{experience.position}}</span>
          </div>
          <div class="right">
            <span class="company">
              <a v-if="experience.website" target="_blank" v-bind:href="experience.website">
                <i class="fa fa-link" />
              </a>
              {{experience.company}}&nbsp;
            </span>
            <span class="timeperiod bold">{{experience.timeperiod}}</span>
          </div>
        </div>
        <div class="two-section">
          <div class="left">
            <span class="description">{{experience.description}}</span>
          </div>
          <div class="right">
            <i class="fa fa-globe"></i>&nbsp;<span class="location">{{experience.location}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="experience-container">
    <div id="experience-title" class="bold uppercase">EDUCATION</div>
    <div class="experience" v-for="education in person.education" :key="education.company">
      <div class="wrapper">
        <div class="section-bar">
          <div class="left">
            <span class="bold uppercase position">{{education.degree}}</span>
          </div>
          <div class="right">
            <span class="company">
              <a v-if="education.website" target="_blank" v-bind:href="education.website">
                <i class="fa fa-link" />
              </a>
              {{education.company}}&nbsp;
            </span>
            <span class="timeperiod bold">{{education.timeperiod}}</span>
          </div>
        </div>
        <div class="two-section">
          <div class="left">
            <span class="description">{{education.description}}</span>
          </div>
          <div class="right">
            <!-- Empty -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

let name = 'mono-chroma';

export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.resume {
  font-family: 'Roboto' !important;
  padding: 0px 0px 20px;
}
.black-bar {
  height: 136px;
  background-color: #3f3f3f;
  margin-bottom: 20px;
  span {
    display: inline-block;
  }
}
.row {
  width:100%;
}
.text-center {
  text-align:center;
}
.name {
  text-transform:lowercase;
  padding: 18px 0px 0px 0px;
  margin-bottom: 6px;
  font-size: 42px;
  font-weight: 500;
  color: #FFFF;
  letter-spacing: 2px;
}
.p-position {
  text-transform: uppercase;
  font-size: 16px;
  color: #FFFF;
  margin-bottom: 20px;
  letter-spacing: 2px;
}
a {
  color: #229EB8;
}
.uppercase {
  text-transform: uppercase;
}
.bold {
  font-weight: bold;
}
.section-four {
  display: table;
  width: 100%;
  .quater {
    display: table-cell;
    width: 25%;
  }
}
.two-section {
  display: table;
  width: 754px;
  .left, .right {
    display: table-cell;
    height: inherit;
    padding: 0 8px;
  }
  .left {
    width: 55%;
  }
  .right {
    width: 45%;
  }
  .description {
    font-size: 14px;
    font-style: italic;
  }
  .location {
    font-size: 16px;
    font-weight: 400;
  }
}
#apps_libs-container {
  margin: 0 20px 28px 20px;
}
.apps_libs {
  padding: 8px;
  div:nth-child(2) {
    margin-left: 12px;
  }
}
.section-bar {
  background-color: #f0f0f0;
  height: 28px;
  display: table;
  width: 754px;
  .left {
    width: 55%;
  }
  .right {
    width: 45%;
  }
  .left, .right {
    display: table-cell;
    height: inherit;
    padding: 0 8px;
    vertical-align: middle;
    .company {
      color: #424242;
      font-weight: 400;
      font-size: 16px;
      vertical-align: middle;
    }
    .timeperiod {
      font-size: 16px;
      font-style: italic;
      font-weight: 500;
      letter-spacing: -1px;
      vertical-align: middle;
      float: right;
    }
  }
}
#experience-container {
  margin: 0 20px 40px 20px;
  .experience {
    margin-bottom: 16px;
  }
}
#experience-title, #apps_libs-title {
  font-size: 24px;
  margin-left: 6px;
}
#contact {
  color: white;
  a {
    color: white;
  }
}
</style>
