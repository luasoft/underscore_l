/*
  Underscore L JavaScript library - 1.0.0-alpha.2
  VnClip.info Group
*/ 
var _l = function(obj) {
  this.obj = obj;
}

// Undercore L library version
_l.VERSION = '1.0.alpha.2';

// return an element by index of an array
_l.getElementByIndex = function(arr, index) {
  var length = arr.length;
  if (0 == length) return null;
  var el = null, i = 0;
  for (; i < length; i++) {
    if (index === i) {
      el = arr[i];
      break;
    }
  }
  return el;
};

// return the maximum value of an array
_l.max = function(arr) {
  var length = arr.length;
  if (0 == length) return null;
  var max = arr[0], i = 1;
  for (; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// return the minimum value of an array
_l.min = function(arr) {
  var length = arr.length;
  if (0 == length) return null;
  var min = arr[0], i = 1;
  for (; i < length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// check an object is defined or not
_l.isUndefined = function(obj) {
  return ('undefined' === typeof obj);
};

// check an object is an object or not
_l.isObject = function(obj) {
  return ('object' === typeof obj);
};

_l.isArray = function(obj) {
  return ('[object Array]' === Object.prototype.toString.call(obj));
};
  