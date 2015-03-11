var makeCrazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  
  this.$node = $('<span class="dancer"><img src="img/SMILE-YE.png" alt></span>').addClass("CrazyDancer");
  this.setPosition(top, left);
  this.step();
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function(){
  var self = this;
  
  makeDancer.prototype.step.call(this);

  self.$node.mouseover(function(){
  	setInterval(function(){self.$node.css({transform: "rotate(" + Math.random() * 360 + "deg)"})}, 100);
  });
}
