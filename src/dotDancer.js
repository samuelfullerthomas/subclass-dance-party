var Dot = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  
  this.$node = $('<span class="dancer"><img src="img/drake.png"></span>');
  this.setPosition(top, left);
  this.step()
};

Dot.prototype = Object.create(makeDancer.prototype);
Dot.prototype.constructor = Dot;
Dot.prototype.step = function(){
  var self = this;
  makeDancer.prototype.step.call(this);
  self.$node.css({"top" : $("body").height() * Math.random(), "left" : $("body").width() * Math.random()});
  for (var i = 0; i < window.dancers.length; i++){
    if (Math.abs(window.dancers[i].position().top - self.$node.position().top)
       < 100 && Math.abs(window.dancers[i].position().left - self.$node.position().left) 
       < 100 && Math.abs(window.dancers[i].position().left - self.$node.position().left) != 0){
      window.dancers[i].remove();
    } 
  }

}

