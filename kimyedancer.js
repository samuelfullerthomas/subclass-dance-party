var kimyeDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  
  this.$node = $('<span class="dancer"><img src="img/kim.gif"></span>');
  this.setPosition(top, left);
  this.step()
};

kimyeDancer.prototype = Object.create(makeDancer.prototype);
kimyeDancer.prototype.constructor = kimyeDancer;
kimyeDancer.prototype.step = function(){
  var self = this;
  
  makeDancer.prototype.step.call(this);
 
  self.$node.animate({"left":"2000px"}, "slow");
}
