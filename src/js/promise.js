console.log("promise.js");

/* animate()
$(function() {
  function playanim() {
    anim01()
    .then(anim02)
    .then(anim03)
    .then(anim04);
  }

  function anim01() {
    var d = new $.Deferred;
    $('#testBall').animate({
      "left" : "100px"
    },1000, function() {
      d.resolve();
    });
    return d.promise();
  }


  function anim02() {
    var d = new $.Deferred;
    $('#testBall').animate({
      "top" : "100px"
    },1000, function() {
      d.resolve();
    });
    return d.promise();
  }


  function anim03() {
    var d = new $.Deferred;
    $('#testBall').animate({
      "left" : "0px"
    },1000, function() {
      d.resolve();
    });
    return d.promise();
  }

  function anim04() {
    var d = new $.Deferred;
    $('#testBall').animate({
      "top" : "0px"
    },1000, function() {
      d.resolve();
    });
    return d.promise();
  }

  $("#button").on("click", function() {
    playanim();
  });

});
*/
