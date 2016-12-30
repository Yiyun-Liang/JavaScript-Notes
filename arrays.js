numbers = [0,1,2,3,4,5,6];
var numbers_object = {
  '0': 'zero',  '1': 'one',   '2': 'two', '3': 'three', '4': 'four',  '5': 'five',
  '6': 'six',   '7': 'seven', '8': 'eight', '9': 'nine'
};
//delete numbers[2];
//document.writeln(numbers);  // 0,1,,3,4,5,6

var is_array = function (value) {
  return value && typeof value === 'object' && value.constructor === Array;
};

var is_array2 = function (value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
};

if(is_array(numbers_object)){
  document.writeln("yes")
}else{
  document.writeln("no")
}

// augmenting Array.prototype
// approach 1
Array.method('reduce', function (f, value) {
  var i;
  for (i = 0; i < this.length; i += 1) {
      value = f(this[i], value);
  }
  return value;
});

var add = function(a,b){
  return a+b;
}
document.writeln(numbers.reduce(add,0))

// approach 2
numbers.total = function(){
  return this.reduce(add, 0)
};
document.writeln(numbers.total())

// initializing arrays, rather than getting undefined
Array.dim = function(length, value){
  var a = [];
  for(var i = 0; i < length; i ++){
    a[i] = value;
  }
  return a;
};

var newArr = Array.dim(5,0);
document.writeln(newArr);
