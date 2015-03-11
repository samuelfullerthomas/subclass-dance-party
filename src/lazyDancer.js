var makeLazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  
  this.$node = $('<span class="dancer"><img src="img/HEYYE.png" alt></span>').addClass("LazyDancer");
  this.setPosition(top, left);
  this.step();
};

makeLazyDancer.prototype = Object.create(makeDancer.prototype);
makeLazyDancer.prototype.constructor = makeLazyDancer;

makeLazyDancer.prototype.step = function(){
  var self = this;
  
  makeDancer.prototype.step.call(this);
 
  self.$node.animate({"left":"2000px"}, "slow");
}
