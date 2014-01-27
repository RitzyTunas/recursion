// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  
  switch(typeof obj) {
    //case "undefined":
      //return '"' + obj + '"';
      //break;
    case 'string':
      // research regex 
      obj = obj.replace(/\\/g, '\\\\');
      obj = obj.replace(/"/g, '\\"');
      return '"' + obj + '"';
      //break;
    case 'number':
      return obj.toString();
      //break;
    case 'boolean':
      return obj.toString();
      //break;
    case 'object':
      if (obj === null) {
        return 'null';
        //break;
      } else if (Array.isArray(obj)) {
        var result = '[';
        for (var i = 0; i < obj.length; i++) {
          result += stringifyJSON(obj[i]);
          if (obj.length > 1 && i !== obj.length - 1) {
            result += ',';
          }
        }
        result += ']';
        return result;
        //break;
      } else {
        var result = '{'
        for (var i in obj) {
          if (typeof obj[i] !== 'function' && obj[i] !== undefined && i !== undefined) {
            result += stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
            if (Object.keys(obj).length > 1 && i !== Object.keys(obj)[Object.keys(obj).length - 1]) {
              result += ',';
            }
          }  
        }
        result += '}';
        return result;
        //break;
      }
  }
   
};
