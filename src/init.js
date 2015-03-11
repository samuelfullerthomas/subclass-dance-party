$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunction)
    // if(dancerMakerFunction === kimyeDancer){
    //   var dancer = new dancerMakerFunction(
    //     $("body").height(),
    //     $("body").width() * Math.random(),
    //     Math.random() * 1000
    //   );
    // }
    // else{
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
    // }

    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $(".lineUp").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++){
      window.dancers[i].animate({"left":"-100px"}, "slow");
    }
  });

  $(".empty").on("click", function(event){
      $(".dancer").empty();
  });

  $(".interact").on("click", function(event){
    $(document).mousemove(function(e){
      $(".dancer").stop().animate({left:e.pageX, top:e.pageY});
    });
  });
  
  // $(".lonely").on("click", function(event){
  //   var positionArray = [];
  //   for (var i = 0; i < window.dancers.length; i++){
  //     console.log(window.dancers[i].position().top);
  //     console.log(window.dancers[i].position().left);
  //     positionArray.push(window.dancers[i].position());
  //   }
  // })
});

