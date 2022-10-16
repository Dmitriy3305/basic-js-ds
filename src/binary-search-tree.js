const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {
    return this.rootItem;
  }

  add(data) {
    this.rootItem = addWithin(this.rootItem, data);
      function addWithin(node, data) {
        if (!node) {
          return new Node(data);
        }
        if (node.data === data) {
          return node;
        }
        if (data < node.data) {
          node.leftItem = addWithin(node.leftItem, data);
        } else {
          node.rightItem = addWithin(node.rightItem, data);
        }
        return node;
      }
  }

  has(data) {
    return searchWithin(this.rootItem, data);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
        searchWithin(node.leftItem, data) : 
        searchWithin(node.rightItem, data);
    }
  }
  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootItem) {
      return null;
    }
    let node = this.rootItem;
    while (node.leftItem) {
      node = node.leftItem;
    }
    return node.data;
  }

  max() {
    if (!this.rootItem) {
      return null;
    }
    let node = this.rootItem;
    while (node.rightItem) {
      node = node.rightItem;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};