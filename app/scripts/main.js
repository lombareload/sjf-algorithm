/* jshint devel:true */

function Element(value){
  this.value = value;
  this.next;
  this.hasNext = function(){
    return !!this.next;
  }
  this.getNext = function(){
    return next;
  }
  this.add = function(value){
    if(next){
      next.add(value);
    } else{
      next = new Element(value);
    }
  }
}

function Queue(){
  this.size = 0;
  this.enqueue = function(value){
    size += 1;
  }
  this.dequeue = function(){
    size -+ 1;
  }
}
