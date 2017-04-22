var genesis = (function() {
  var clickCounter = 0;
  var body = document.getElementsByTagName('body')[0];
  var socialMediaIcons = document.getElementsByClassName('main-container-social-links-list-item');

  var colorRandomizer = function() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = `#${randomColor}`;
    body.style.transition = '3.5s';

    for (var index = 0; index < socialMediaIcons.length; index++) {
      socialMediaIcons[index].style.color = `#${randomColor}`
      socialMediaIcons[index].style.transition = '2s';
    }
  };

  var secondIntervals = setInterval(colorRandomizer, 1250);

  body.onclick = function(event) {
    clickCounter = clickCounter + 1;
    return clickCounter % 2 !== 0 ? clearInterval(secondIntervals) : secondIntervals = setInterval(colorRandomizer, 1000);
  };
});

onload = genesis();