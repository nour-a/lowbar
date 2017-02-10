var _ = {};

_.identity = function(val) {
  return val; 
};

_.first = function(arr, n) {
  if(!arguments.length || arr.length === 0) {
  return undefined;
}
  if(arguments.length === 1) {
  return arr[0]; 
} else {
  return arr.slice(0, n);
}
};


_.last = function(arr,n) {
  if(!arguments.length || arr.length === 0) {
  return undefined;
}
if(arguments.length === 1) {
  return arr[arr.length - 1];
}else{
  return arr.slice(n-1)
}

};

_.each = function(list, iteratee) {

for(var i = 0; i < list.length; i++) {
  iteratee(list[i]);
}
return list; 
};

_.indexOf = function(arr,val) {
  if(arguments.length === 2){
    for(var i=0;i<arr.length;i++){
      if(arr[i] === val){
        return arr.indexOf(val)
      }
    }
  }else{
  return -1;
  }
};

_.filter = function(list, condition) {
  var result = [];

  if(!arguments.length || typeof arguments[0]=== 'number'){
    return [];
  }
  if(arguments.length === 1){
    return list;
  }
for(var i = 0; i < list.length; i++) {
  if(condition(list[i]) === list[i]) {
    result.push(list[i]);
  }
} 
return result;
};

_.reject = function(list, condition) {
  var result = [];

  for(var i = 0; i < list.length; i++) {
    if(condition(list[i]) !== list[i]) {
      result.push(list[i]);
    }
  }
return result; 
}

_.uniq = function (arr) {
  var obj = {};
  var result = [];

  for(var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true; 
  }

  for(var key in obj) {
    result.push(key);
  } 
  return result; 
}


if (typeof module !== 'undefined') {
  module.exports = _;
}


