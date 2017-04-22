var genesis = (function() {
  var clickCounter = 0;
  var body = document.getElementsByTagName('body')[0];
  var colorRandomizer = function() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = `#${randomColor}`;
    body.style.transition = '4s';
  };

  var secondIntervals = setInterval(colorRandomizer, 1000);

  body.onclick = function(event) {
    clickCounter = clickCounter + 1;
    return clickCounter % 2 !== 0 ? clearInterval(secondIntervals) : secondIntervals = setInterval(colorRandomizer, 1000);
  };
});

onload = genesis();