var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  
  this.$node = $('<span class="dancer"><img src="img/THINKYKANYE.gif" alt></span>')
  this.setPosition(top, left);
  this.step()
  this.spin()
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}

makeBlinkyDancer.prototype.spin = function() {
  var self = this;

  setInterval(function(){
    self.$node.css({transform: "rotate(" + Math.random() * 10 + "deg)"})
  }, 100);
}