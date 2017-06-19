// document.onload = (function() {
//   let clickCounter = 0;
//   const body = document.getElementsByTagName('body')[0];
//   const socialMediaIcons = document.getElementsByClassName('main-container-social-links-list-item');

//   function randomizeInput(limit) {
//     return Math.floor(Math.random() * limit);
//   }

//   function randomizeColors() {
//     const rgba = {
//       red: randomizeInput(255),
//       green: randomizeInput(255),
//       blue: randomizeInput(255),
//       alpha: Math.random() * 1,
//     };

//     body.style.background = `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`;
//     body.style.transition = '3.5s';
//     loopSocialMedia(`rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`);
//   }

//   function loopSocialMedia(color) {
//     for (let index = 0; index < socialMediaIcons.length; index++) {
//       socialMediaIcons[index].style.color = color;
//       socialMediaIcons[index].style.transition = '2s';
//     }
//   }

//   let secondIntervals = setInterval(randomizeColors, 1500);

//   body.onclick = function(event) {
//     clickCounter = clickCounter + 1;
//     if (clickCounter % 2 !== 0) {
//       clearInterval(secondIntervals);
//       loopSocialMedia('white');
//     } else {
//       secondIntervals = setInterval(randomizeColors, 1500);
//     }
//   };
// })();

import * as Vue from 'vue';

const app = new Vue({
  el: '#main-app',
  template: `
    <section>
      <header>
        <h1>
          appName {{ appName }}
        </h1>
      </header>
    </section>
  `,
  data: {
    appName: 'Danny\'s portfolio',
  },
});
