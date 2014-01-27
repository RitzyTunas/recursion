// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But in stead we're going to implement it from scratch:

// element.classList.contains() checks if an element contains a specific class
// element.classList.length  checks the number of classes for an element
// element.childNodes returns a pseudo-array of all the child nodes of an element, e.g. document.body.childNodes returns collection of the body element's child nodes

  var getElementsByClassName = function (className) {
  // your code here
  var result = [];
  // define recurring function
  var recur = function(node) {
    // check if node contains any classes
    if (node.classList) {
      // match classes with target class name
      if (node.classList.contains(className)) {
        // add node to result array
        result.push(node);
      }
    }
    // check if node has child nodes
    if (node.childNodes) {
      // loop through and call recurring function on each child node
      for (var i = 0; i < node.childNodes.length; i++) {
        recur(node.childNodes[i]);
      }
    }
  }
  // kick off recurring function with body element
  recur(document.body);
  return result;
  
  /* 
  // only checks for child nodes of body element, and not nodes of nodes
  // need to implement recurring function to check classes within nodes of nodes
  // list all child nodes of body element
  var nodeList = document.body.childNodes;
  // loop through each node/element
  for (var i = 0; i < nodeList.length; i++) {
    // check if node/element contains any classes
    if (nodeList[i].classList) {
      // match classes to target class name, then push node/element to result array
      if (nodeList[i].classList.contains(className)) {
        result.push(nodeList[i]);
      }
    }
  }
  return result;
  */
};
