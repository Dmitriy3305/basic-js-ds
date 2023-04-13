const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {
    if (typeof (this.rootItem) == 'undefined') {
      return null
    }
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
  find(data) {
    return findWithin(this.rootItem, data)
    function findWithin (node, data) {
      if (typeof (data) == 'undefined') {
        return null;
      }
      else if (node.data == data) {
        return node;
      }
      else if (node.data > data) {
        return findWithin(node.leftItem, data)
      }
      else if (!node) {
        return null;
      }
      else {
        return findWithin(node.rightItem, data)
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.rootItem, data);

      function removeNode(node, data) {
        if (node == null) {
          return null;
        }

        if (data < node.data) {
          node.left = removeNode(node.leftItem, data);
          return node;
        } else if (node.data < data) {
          node.rightItem = removeNode(node.rightItem, data);
          return node;
        } else {
          if (!node.leftItem && !node.rightItem) {
            return null;
          }
          if (!node.leftItem) {
            node = node.rightItem;
            return node;
          }

          if (!node.rightItem) {
            node = node.leftItem;
            return node;
          }

          let minFromRightItem = node.rightItem;
          while (minFromRightItem.leftItem) {
            minFromRightItem = minFromRightItem.leftItem;
          }
          node.data = minFromRightItem.data;
          node.rightItem = removeNode(node.rightItem, minFromRightItem.data);
          return node;
        }
      }
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