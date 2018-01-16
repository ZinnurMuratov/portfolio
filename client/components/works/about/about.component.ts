import Vue from 'vue';
import Component from 'vue-class-component';

import { colorVariables } from './../../core';
import { seo } from './../../core/services';

@Component({
  template: `
    <main class="about-component">
      <div class="container">
        <div class="about-section selfie-section">
          <img
            class="about-me-pic"
            src="/images/about/danny.jpg"
            alt="Daniel Romero FronEnd Web Developer">
        </div>
      </div>

      <div class="container">
        <div class="about-section">
          <h1 class="">About Me</h1>
          <p class="about-paragraph">
            My name is Daniel Romero and I am a Front End Web Developer with 3 years of experience
            developing, and maintaining, web applications using modern frameworks and practices.
            My current residence is beautiful Los Angeles, CA but am willing to venture into
            destinations with similar weather.
          </p>
          <p class="about-paragraph">
            I enjoy working with Typescript and have built this portfolio project with VueJS and
            Typescript on the frontend and used NodeJS, ExpressJS, and Typescript on the backend.
          </p>
          <p class="about-paragraph">
            <a
              v-on:click="() => fullBioVisible = !fullBioVisible"
              class="about-toggle">
              {{ fullBioVisible ? '[hide bio]' : '[read full bio]'}}
            </a>
          </p>
          <p v-if="fullBioVisible" class="about-paragraph">
            My journey into web development started when I was attending community college and
            had to work nightshifts to pay for school. I was determined to stop working hard labor jobs
            and look into more maintainable alternatives like online jobs to pay for school. I
            encountered affiliate marketing and with it WordPress. Having a web presence is
            important and more importantly is the image and first impressions people have when
            they visit your site. So as a natural DIYer, I started to tinker with my website's template
            and soon enough found love for making things on a webpage look pretty.
          </p>
          <p v-if="fullBioVisible" class="about-paragraph">
            I decided to attend General Assembly's Web Development Immersive Course where I spent 12 hours
            a day on their campus trying to grasp everything I could. I met great people and have kept in
            touch with some of the instructors and students who attended. After GA I had a hard time finding
            work due to my lack of words to describe my work and severe lack of experience.
          </p>
          <p v-if="fullBioVisible" class="about-paragraph">
            As I saw no advancements when applying for work through a resume, I started networking agressively.
            Thankfully, there was a hackathon in Long Beach and a sofware engineer signed me up for a hacakthon
            that I had no intention of attending because I considered myself too stupid to make any contributions.
            With the few choices on the table to find a team, I reached out to my future boss who took me into
            his team almost last minute of the competition.
          </p>
          <p v-if="fullBioVisible" class="about-paragraph">
            We won the local competition but lost the state wide vote. It didn't matter, I had scored my first
            job thanks to an unconventional interview.
          </p>
        </div>
      </div>

      <div class="container">
        <div class="about-section">
          <h2 class="">Skills</h2>
          <ul class="skills-list">
            <li class="">
              <p class="about-paragraph">Typescript, Javascript, Coffesscript</p>
            </li>
            <li class="">
              <p class="about-paragraph">AngularJS & Angular2</p>
            </li>
            <li class="">
              <p class="about-paragraph">ExpressJS & NodeJS</p>
            </li>
            <li class="">
              <p class="about-paragraph">React Native, React, Redux</p>
            </li>
            <li class="">
              <p class="about-paragraph">Foundation, Semantic UI, Bourbon, Material UI</p>
            </li>
            <li class="">
              <p class="about-paragraph">CSS3, SASS, LESS, CSS</p>
            </li>
            <li class="">
              <p class="about-paragraph">Jade (Pug), HTML</p>
            </li>
            <li class="">
              <p class="about-paragraph">Webpack, GulpJS, GruntJS</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="about-section">
          <h2 class="">Experience</h2>

          <p class="about-paragraph">
            download resume:
            <a href="/documents/resume-2018.pdf" class="about-toggle" download>PDF</a>
            <span> | </span>
            <a href="/documents/resume-2018.docx" class="about-toggle" download>DOCX</a>
            <span> | </span>
            <a
              href="https://docs.google.com/document/d/1piA_8KysQGiC1Og-fe9ebjZscfF_IQh3a79ewUEQ22U/edit?usp=sharing"
              class="about-toggle">Google Docs</a>
          </p>

          <h4 class="skills-header">Winc (Formerly ClubW)</h4>
          <p class="skills-subheader">July 2017 - October 2017</p>

          <p class="about-paragraph">
            In my last year at Winc, I maintained and upgraded a variety of Winc’s projects ranging from internal
            administrative systems, used for managing membership accounts and warehouse inventory, to the main
            website.
          </p>
          <p class="about-paragraph">
            Through an agile workflow, I partnered with internal teams to create new features like FedEx hold
            location integration, an internal tag based search engine for our products, an AWS auto image uploader and
            cropper, dynamic partnerships on our product's detail page, among many others.
          </p>

          <h4 class="skills-header">Winc (Formerly ClubW)</h4>
          <p class="skills-subheader">September 2015 - July 2017</p>

          <p class="about-paragraph">
            After a couple months of making landing pages by hand, I built a CMS prototype to build landing
            pages with just a couple clicks. The team pitched the prototype and established specifications for the
            landing pages. The CMS empowered the marketing team to create their own customized landing pages,
            greatly reducing the time and engineering resources needed to launch new marketing campaigns.
          </p>
          <p class="about-paragraph">
            As the company underwent a massive rebrand, I worked closely with the CEO to re-skin the company’s
            main website, as part of the company-wide re-brand campaign. In the meantime, the lead engineers upgraded
            the new website to Angular 2rc, which meant I was the main contributor of making improvements and fixing
            bugs on the site.
          </p>
          <p class="about-paragraph">
            After proving my skills building the CMS from scratch, I contributed in a sprint dedicated to accelerating
            funnel optimization and new member onboarding. I also, contributed as main front-end stakeholder in a
            sprint dedicated to improving current member experience, which increased total company revenue.
          </p>

          <h4 class="skills-header">ClubW</h4>
          <p class="skills-subheader">June 2015 - September 2015</p>

          <p class="about-paragraph">
            After the hackathon, I worked for ClubW which was about to rebrand after my first year into Winc.
            I started as an intern crafting more than one hundred landing pages, via raw HTML5, CSS3, and
            Javascript, for the marketing team that aligned the company's messaging throughout the "funnel".
          </p>
          <p class="about-paragraph">
            I also contributed, developed new features, and fixed bugs on the main website that was written
            in Angular 1.3 at the time.
          </p>

        </div>
      </div>
    </main>
  `,
  name: seo.about.name,
  metaInfo: seo.about.metaInfo,
})

export class AboutComponent extends Vue {
  public fullBioVisible: boolean = false;

  private beforeDestroy() {
    this.$emit('randomBackground', colorVariables.black);
  }

  private mounted() {
    this.$emit('randomBackground', colorVariables.teal);
  }

}
