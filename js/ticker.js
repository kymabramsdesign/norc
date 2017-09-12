document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#insight-type',
    typeSpeed: 50,
    startDelay: 0,
    loop: false,
    showCursor: false
  });

  var speedUp = 100;
  var backUp = 20;

  new Typed('#typed2', {
    strings: ['for Social<br />Change',
    'for Social<br />Justice',
    'for Impact',
    'is Scalable',
    'from<br />Evaluation',
    'is Accessible',
    'for Informed<br />Decisions'],
    onStringTyped: function() {
      speedUp = speedUp-50;
      backUp = backUp-50;
      // this.typeSpeed = this.options.typeSpeed;
    },
    backSpeed: backUp,
    typeSpeed: speedUp,
    backDelay: 100,
    smartBackspace: false,
    startDelay: 1050,
    loop: false,
    cursorChar: '_',

  });

});

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}

