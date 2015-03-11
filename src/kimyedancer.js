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
  self.$node.animate({"top" : "-100px"}, slow);
  // for (var i = 0; i < window.dancers.length; i++){
  //   if (Math.abs(window.dancers[i].position().top - self.$node.position().top) 
  //      < 100 && Math.abs(window.dancers[i].position().top - self.$node.position().top) != 0){
  //     $(.stop();
  //   } 
  // }
}
