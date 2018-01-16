export const seo = {
  home: {
    name: 'Home',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Home Page',
        meta: [
          {
            name: 'description',
            content: `Daniel Romero's FrontEnd Web Development portfolio showcasing
            various skills and proficiencies.`,
          },
        ],
      };
    },
  },
  about: {
    name: 'About',
    metaInfo() {
      return {
        title: 'Danny\'s IO | About Page',
        meta: [
          {
            name: 'description',
            content: `Daniel's about page, with his downloadable resume, and the 
            story of how he landed his first job as a Web Develope`,
          },
        ],
      };
    },
  },
  works: {
    name: 'Works',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Works Page',
        meta: [
          {
            name: 'description',
            content: `Danny's IO portfolio works page showcasing sample apps and previous works.`,
          },
        ],
      };
    },
  },
  randomQuotes: {
    name: 'Danny\'s IO | Random Quotes App',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Random Quotes App',
        meta: [
          {
            name: 'description',
            content: `Random quotes app. It uses Stormconsultancy quotes api and allows for twitter share.`,
          },
        ],
      };
    },
  },
  weather: {
    name: 'Danny\'s IO | Current Weather App',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Current Weather App',
        meta: [
          {
            name: 'description',
            content: `A weather app that uses Darksky weather api and Flickr to 
            render the weather and a picture on the background.`,
          },
        ],
      };
    },
  },
};
