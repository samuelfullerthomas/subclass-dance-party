var makeLazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
};

makeLazyDancer.prototype = Object.create(makeDancer.prototype)

makeLazyDancer.prototype.constructor = makeLazyDancer

makeLazyDancer.prototype.step = function(){
      makeDancer.prototype.step.call(this)
      this.$node.toggle();
}
makeLazyDancer.prototype.lineUp = function(){

}
