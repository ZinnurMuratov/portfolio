export const seo = {
  home: {
    name: 'Home',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Home Page',
        meta: [
          {
            name: 'description',
            content: 'Danny\'s IO is a Portfolio Website for Web Developer Daniel Romero who specializes in Front End Development.'
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
          { name: 'description', content: 'Danny\'s IO works page showcasing simple apps.' },
        ],
      };
    },
  },
  randomQuotes: {
    name: 'Random Quotes App',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Random Quotes App',
        meta: [
          {
            name: 'description',
            content: 'Random quotes app. It uses Stormconsultancy quotes api and allows for simple twitter share.',
          },
        ],
      };
    },
  },
  weather: {
    name: 'Weather App',
    metaInfo() {
      return {
        title: 'Danny\'s IO | Weather App',
        meta: [
          {
            name: 'description',
            content: 'Simple weather app. It uses Darksky weather api and Flickr to render the weather and a picture on the background.',
          },
        ],
      };
    },
  }
};
