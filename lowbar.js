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


if (typeof module !== 'undefined') {
  module.exports = _;
}
