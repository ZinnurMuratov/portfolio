onload = (function() {
  var clickCounter = 0;
  var body = document.getElementsByTagName('body')[0];
  var socialMediaIcons = document.getElementsByClassName('main-container-social-links-list-item');

  function randomizeInput(limit) {
    return Math.floor(Math.random() * limit);
  }

  function colorRandomizer() {
    var rgba = {
      red: randomizeInput(255),
      green: randomizeInput(255),
      blue: randomizeInput(255),
      alpha: Math.random() * 1
    }

    body.style.background = `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`;
    body.style.transition = '3.5s';
    loopSocialMedia(`rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`);
  };

  function loopSocialMedia(color) {
    for (var index = 0; index < socialMediaIcons.length; index++) {
      socialMediaIcons[index].style.color = color
      socialMediaIcons[index].style.transition = '2s';
    }
  }

  var secondIntervals = setInterval(colorRandomizer, 1500);

  body.onclick = function(event) {
    clickCounter = clickCounter + 1;
    if (clickCounter % 2 !== 0) {
      clearInterval(secondIntervals);
      loopSocialMedia('white');
    } else {
      secondIntervals = setInterval(colorRandomizer, 1500);
    }
  };
})();