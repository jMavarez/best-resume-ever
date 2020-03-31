<template>
<div class="resume" id="template">
  <div class="black-bar">
    <div class="row text-center">
      <span class="name">{&nbsp;&nbsp;{{person.name.first}}{{person.name.last}}&nbsp;&nbsp;}</span>
    </div>
    <div class="row text-center">
      <p class="nat-age-wrapper center">{{person.nationality.name}}&nbsp;|&nbsp;AGE:&nbsp;{{calcAge(person.birth)}}</p>
    </div>
    <div class="row text-center">
      <p class="p-position center">{{person.position}}</p>
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
        <div class="experience-description">
          <ul id="milestones">
            <div class="milestone" v-for="milestone in experience.milestones" :key="milestone.description" >
              <li v-html="milestone.description"></li>
              <div>
                <a target="_blank" v-bind:href="milestone.link">{{milestone.link_text}}</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id="apps_libs-container">
    <div id="apps_libs-title" class="bold uppercase">{{lang.side_projects}}</div>
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
    <div id="experience-title" class="bold uppercase">{{lang.education}}</div>
    <div class="experience" v-for="education in person.education" :key="education.company">
      <div class="wrapper">
        <div class="section-bar education">
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
  <div id="contact">
    <div id="contact-title" class="bold uppercase">{{lang.contact}}</div>
    <div class="two-section">
      <div class="left">
        <div >
          <i class="fa fa-github" aria-hidden="true"></i>&nbsp;
          <a :href="'https://github.com/'+person.contact.github" target="_blank">{{person.contact.github}}</a>
        </div>
        <div>
          <i class="fa fa-bitbucket" aria-hidden="true"></i>&nbsp;
          <a :href="'https://bitbucket.org/'+person.contact.bitbucket" target="_blank">{{person.contact.bitbucket}}</a>
        </div>
        <div>
          <i class="fa fa-linkedin" aria-hidden="true"></i>&nbsp;
          <a :href="'https://linkedin.com/in/'+person.contact.linkedin" target="_blank">{{person.name.first}} {{person.name.last}}</a>
        </div>
      </div>
      <div class="right float-right">
        <div>
          {{person.contact.location}}&nbsp;
          <i class="fa fa-globe" aria-hidden="true"></i>
        </div>
        <div>
          {{person.contact.email}}&nbsp;
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div>{{person.contact.phone}}&nbsp;
          <i class="fa fa-phone" aria-hidden="true"></i>
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
@fade-grey: #f6f6f6;

.resume {
  font-family:'Raleway', sans-serif;
  padding: 0px 0px 20px;
}
.black-bar {
  height: 156px;
  background-color: #424242;
  margin-bottom: 20px;
  span {
    display: inline-block;
  }
}
.row {
  width: 100%;
}
.text-center {
  text-align: center;
}
.name {
  text-transform: lowercase;
  padding: 18px 0px 0px 0px;
  margin-bottom: 2px;
  font-size: 42px;
  font-weight: 500;
  color: #ffff;
  letter-spacing: 2px;
}
.p-position {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: #ffff;
  margin-bottom: 16px;
  letter-spacing: 2px;
}
.nat-age-wrapper {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #ffff;
}
a {
  color: #5cc9e1;
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
  width: 722px;
  .left,
  .right {
    display: table-cell;
    height: inherit;
    padding: 0 8px;
    width: 50%;
  }
  .description {
    font-size: 14px;
    font-style: italic;
  }
  .location {
    font-size: 14px;
    font-weight: 400;
  }
}
#milestones {
  font-size: 14px;
  margin-right: 48px;
  .milestone {
    margin-bottom: 6px;
  }
}
#apps_libs-container {
  margin: 0 36px 28px 36px;
}
.apps_libs {
  padding: 8px;
  font-size: 14px;
  div:nth-child(2) {
    margin-left: 12px;
  }
}
.section-bar {
  background-color: @fade-grey;
  height: 28px;
  display: table;
  width: 100%;
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
  .left,
  .right {
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
  margin: 0 36px 40px 36px;
  .experience {
    margin-bottom: 16px;
  }
}
#experience-title,
#apps_libs-title {
  font-size: 24px;
  margin-left: 6px;
}
#contact-title {
  border-bottom: 2px solid @fade-grey;
  margin: 0 6px 6px 6px;
  font-size: 24px;
}
#contact {
  margin: 0 36px 20px 36px;
  font-weight: 300;
  .fa {
    color: #424242;
  }
  .right,
  .left {
    display: table-cell;
    height: inherit;
    padding: 0 8px;
    vertical-align: middle;
    div:nth-child(n-1) {
      margin-bottom: 6px;
    }
  }
  .right {
    float: right;
    text-align: right;
    width: 80%;
  }
}
.education {
  .left {
    width: 60%;
  }
  .right {
    width: 40%;
  }
}
</style>
