/* jshint devel:true */

var Element = function initialize(){
  var index = 0;
  function _Element(rafaga){
    this.rafaga = rafaga;
    this.index = index++;
  }
  return _Element;
}

function Queue(){
  this.data = [];
  this.enqueue = function(element){
    console.log(element.rafaga);
    this.data.push(element);
    this.data.sort(function(e1, e2){
      return e1.rafaga < e2.rafaga;
    });
  }
  this.dequeue = function(){
    this.data.shift();
  }
  this.values = function(){
    return this.data;
  }
}
