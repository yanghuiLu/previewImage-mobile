import { bind }  from './helps/bind'


const toString = Object.prototype.toString;

const isFunction = function(value) {
  return toString.call(value) == '[object Function]';
}
const isString = function(value) {
  return toString.call(value) == '[object String]';
}
const isBoolean = function(value) {
  return toString.call(value) == '[object Boolean]';
}
const isUndefined = function(value) {
  return toString.call(value) == '[object Undefined]';
}
const isNumber = function(value) {
  return toString.call(value) == '[object Number]';
}
const isSymbol = function(value) {
  return toString.call(value) == '[object Symbol]';
}
const isNull = function(value) {
  return toString.call(value) == '[object Null]';
}
export const isArray = function(value) {
  return toString.call(value) == '[object Array]';
}
const isObject = function(value) {
  return (
    toString.call(value) == '[object Object]' ||
    // if it isn't a primitive value, then it is a common object
    (!this.isNumber(value) &&
      !this.isString(value) &&
      !this.isBoolean(value) &&
      !this.isArray(value) &&
      !this.isNull(value) &&
      !this.isFunction(value) &&
      !this.isUndefined(value) &&
      !this.isSymbol(value)
    )
  )
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
 function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
export function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
}
  
/**
 * 
 * @param {Object} obj source object
 * @returns Object 
 */
 export function objectClone(obj){
  var cObj;
  if (isObject(obj) || isArray(obj)) {
    cObj = isObject(obj) ? {} : [];
    for (var i in obj) {
      cObj[i] = oCopy(obj[i])
    }
  } else {
    cObj = obj;
  }
  return cObj;
}

export default {
    isArray,
    forEach,
    extend,
    objectClone
}