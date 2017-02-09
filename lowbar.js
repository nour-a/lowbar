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

_.each = function() {


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

_.filter = function(list,condition) {
  if(!arguments.length || typeof arguments[0]=== 'number'){
    return [];
  }
  if(arguments.length === 1){
    return list;
  }


};






if (typeof module !== 'undefined') {
  module.exports = _;
}
