/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = 0;

    function sumNode(node) {
      total += node.val;
      for (let child of node.children) {
        sumNode(child);
      }
    }

    sumNode(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let evens = 0;

    function countEvensNode(node) {
      if (node.val % 2 === 0) evens++;
      for (let child of node.children) {
        countEvensNode(child);
      }
    }

    countEvensNode(this.root);
    return evens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;

    function numGreaterNode(node) {
      if (node.val > lowerBound) count++;
      for (let child of node.children) {
        numGreaterNode(child);
      }
    }

    numGreaterNode(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
