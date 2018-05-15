console.log("mainNormal.js");


// var shutterA = document.querySelector('.shutter-a');
// var shutterB = document.querySelector('.shutter-b');
//
// var ShutterAnimation = Barba.BaseTransition.extend({
//
//   start: function() {
//     this.shutter(400)
//     .then(this.newContainerLoading)
//     .then(this.finish.bind(this));
//   },
//
//   shutter: function(timer) {
//     return new Promise(function(resolve){
//
//       shutterA.classList.toggle('moved');
//       shutterB.classList.toggle('moved');
//
//       setTimeout(function() {
//         resolve();
//       },timer);
//
//     });
//   },
//
//   finish:function() {
//     document.body.scrollTop = 0;
//     this.done();
//   }
//
// });
//
// Barba.Pjax.getTransition = function() {
//   return ShutterAnimation;
// };
//
// Barba.Pjax.start();


var shutterA = document.querySelector('.shutter-a');

var ShutterAnimation = Barba.BaseTransition.extend({

  start: function() {
    this.shutter(1000)
    .then(this.newContainerLoading)
    .then(this.finish.bind(this));
  },

  shutter: function(timer) {
    return new Promise(function(resolve){
      shutterA.classList.toggle('moved');
      setTimeout(function() {
        resolve();
      },timer);

    });
  },

  finish:function() {
    shutterA.classList.toggle('moved');
    document.body.scrollTop = 0;
    this.done();
  }

});

Barba.Pjax.getTransition = function() {
  return ShutterAnimation;
};

Barba.Pjax.start();


//amimejs
$('#button').on('click', function() {
  anime({
    targets: "#testBall",
    translateX: {
    value: '+=150',
    duration: 1000
  }
  });
});
