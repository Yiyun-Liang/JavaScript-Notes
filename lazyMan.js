function _LazyMan(name){
  this.tasks = [];
  var self = this;
  var fn = (function(n){
    var name = n;
    return function(){
      console.log("Hi! This is "+name+"!");
      self.next();
    };
  })(name);

  this.tasks.push(fn);
  setTimeout(function(){
    self.next();
  }, 0);
}

_LazyMan.prototype.next = function(){
  var fn = this.tasks.shift();   // shift returns first array element and remove it
  return fn && fn();
};

_LazyMan.prototype.eat = function(name){
  var self = this;
  var fn = (function(n){
    return function(){
      console.log("Eat "+name+"~");
      self.next();
    };
  })(name);

  this.tasks.push(fn);
  return this;
};

_LazyMan.prototype.sleep = function(timeInSec){
  var self = this;
  var fn = (function(sec){
    return function(){
      setTimeout(function(){
        console.log("Wake up after "+sec+"s~");
        self.next();
      }, sec*1000);
    };
  })(timeInSec);

  this.tasks.push(fn);
  return this;
};

_LazyMan.prototype.sleepFirst = function(timeInSec){
  var self = this;
  var fn = (function(sec){
    return function(){
      setTimeout(function(){
        console.log("Wake up after "+sec+"s~");
        self.next();
      }, sec*1000);
    };
  })(timeInSec);

  this.tasks.unshift(fn);
  return this;
};

function LazyMan(name){
  return new _LazyMan(name);
}


LazyMan("Hank"); // Hi! This is Hank!
LazyMan("Hank").sleep(10).eat("dinner");
// Hi! This is Hank, wait for 10s, wake up after 10s, eat dinner~
LazyMan("Hank").eat("dinner").eat("supper");
// Hi! This is Hank, eat dinner~, eat supper~
LazyMan("Hank").sleepFirst(5).eat("supper");
// Wait for 5s, Hi! This is Hank, eat supper~
