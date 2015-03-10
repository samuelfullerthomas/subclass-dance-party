var makeCrazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype)

makeCrazyDancer.prototype.constructor = makeCrazyDancer

makeCrazyDancer.prototype.step = function(){
      makeDancer.prototype.step.call(this)
      this.$node.addClass( 'follow' )
      this.$node.mousemove(function(e){
        //$('.follow').css({'top': e.clientY - 20, 'left': e.clientX - 20});
        $('.follow').css({'top': ($("body").height() * Math.random()), 'left': ($("body").width() * Math.random())});
      });
}
