var _ = {};

_.identity = function (val) {
  return val;
};
///////////First///////////
_.first = function (arr, n) {
  var result = [];
  if (!arguments.length) {
    return undefined;
  }
  else if (arguments.length === 1) {
    if (Array.isArray(arr) || typeof arr === "string") {
      result = arr[0];
    } else {
      result = undefined;
    }
  } else {
    if (Array.isArray(arr) && typeof n === "number") {
      result = arr.slice(0, n);
    }
    if (typeof arr === "string" && typeof n === "number") {
      arr = arr.split("");
      result = arr.slice(0, n);
    }
  }
  return result;
};


///////////Last///////////
_.last = function (arr, n) {
  var result = [];
  if (!arguments.length) {
    return undefined;
  }
  else if (arguments.length === 1) {
    if (Array.isArray(arr) || typeof arr === "string") {
      result = arr[arr.length - 1];
    } else {
      result = undefined;
    }
  } else {
    if (Array.isArray(arr) && typeof n === "number") {
      result = arr.slice(-n);
    }
    if (typeof arr === "string" && typeof n === "number") {
      arr = arr.split("");
      result = arr.slice(-n);
    }
  }
  return result;

};
///////////Each///////////

_.each = function (list, iteratee) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  } else if (typeof list === "object") {
    var keys = Object.keys(list);
    for (var j = 0; j < keys.length; j++) {
      iteratee(list[keys[j]], keys[j], list);
    }
  }

  return list;
};
///////////IndexOf///////////


_.indexOf = function (arr, val) {
  if (arguments.length === 2 && (Array.isArray(arr) || (typeof arr === "string"))) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
  } else {
    return -1;
  }
};

///////////Fiter///////////
_.filter = function (list, condition) {
  var result = [];
  if (!arguments.length || typeof arguments[0] === "number") {
    return [];
  }
  if (arguments.length === 1) {
    return list;
  }
  if (!(Array.isArray(list)) && typeof list === "object") {
    list = Object.values(list);
  }
  for (var i = 0; i < list.length; i++) {
    if (condition(list[i]) === list[i]) {
      result.push(list[i]);
    }
  }
  return result;
};
///////////Reject///////////

_.reject = function (list, condition) {
  var result = [];
  if (!arguments.length || typeof arguments[0] === "number") {
    return [];
  }
  if (arguments.length === 1) {
    return list;
  }
  if (!(Array.isArray(list)) && typeof list === "object") {
    list = Object.values(list);
  }
  for (var i = 0; i < list.length; i++) {
    if (condition(list[i]) !== list[i]) {
      result.push(list[i]);
    }
  }
  return result;
};
///////////Uniq///////////
_.uniq = function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};
///////////Map///////////
_.map = function (list, func) {
  var result = [];
  if (Array.isArray(list) || typeof list === "string") {
    for (var i = 0; i < list.length; i++) {
      result.push(func(list[i]));
    }
  } else if (!Array.isArray(list) && typeof list === "object") {
    for (var key in list) {
      result.push(func(list[key]));
    }
  }
  return result;
};
///////////Pluck///////////
_.pluck = function (list, propertyName) {
  var result = [];
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      result.push(list[i][propertyName]);
    }
  }
  return result;
};
///////////Reduce///////////
_.reduce = function (list, func, memo) {
  if (!Array.isArray(list) && typeof list === "object") {
    list = Object.values(list);
  }
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      if (!memo) {
        memo = list[0];
        i++;
      }
      memo = func(memo, list[i]);
    }
  }
  return memo;
};
///////////Every///////////
_.every = function (list, predicate) {
  if (!Array.isArray(list) && typeof list === "object");
  list = Object.values(list);
  var result = true;
  var j = 0;
  while (result !== false && j < list.length) {
    if (predicate(list[j])) {
      j++;
    } else {
      result = false;
    }
  }
  return result;
};
///////////Some///////////
_.some = function (list, predicate) {
  if (!Array.isArray(list) && typeof list === "object");
  list = Object.values(list);
  var result = false;
  var j = 0;
  while (result === false && j < list.length) {
    if (!predicate(list[j])) {
      j++;
    } else {
      result = true;
    }
  }
  return result;
};

///////////Contains///////////
_.contains = function (list, val) {
  if (Array.isArray(list) || typeof list === "string") {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === val) {
        return true;
      }
    }
  } else if (typeof list === "object") {
    for (var key in list) {
      if (list[key] === val) {
        return true;
      }
    }
  }
  return false;
};
///////////Extend///////////
_.extend = function (destination, source) {
  var keys;
  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i];
    keys = Object.keys(source);
    for (var j = 0; j < keys.length; j++) {
      destination[keys[j]] = source[keys[j]];
    }
  }

  return destination;
};
///////////Default///////////
_.default = function (obj, def) {
  for (var key in def) {
    if (!obj[key]) {
      obj[key] = def[key];
    }
  }
  return obj;
};


if (typeof module !== "undefined") {
  module.exports = _;
}