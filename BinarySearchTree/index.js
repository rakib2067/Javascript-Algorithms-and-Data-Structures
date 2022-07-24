class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value == current.value) return undefined;
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value == current.value) return current;
      else if (value > current.value) {
        if (!current.right) {
          return false;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          return false;
        }
        current = current.left;
      }
    }
  }
  BFS() {
    if (!this.root) return [];
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      visited.push(current);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }
  DFS() {
    return this.DFSPreorder();
  }
  DFSPreorder() {
    if (!this.root) return [];

    let visited = [];
    let current = this.root;
    function traverse(node) {
      visited.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
  DFSPostorder() {
    if (!this.root) return [];
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      visited.push(node);
    }
    traverse(current);
    return visited;
  }
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/

mocha.setup("bdd");
const { assert } = chai;

describe("insert()", () => {
  it("Sets root of BST if BST has no root.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(1);
    assert.equal(BST.root.value, 10);
    //          10
    //        /   \
    //       ?     ?
  });
  it("Does not insert if value is equal to another value in BST.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(10);

    assert.isNotOk(BST.root.left);
    assert.isNotOk(BST.root.right);
  });
  it("Inserts correctly.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.equal(BST.root.left.value, 3);
    assert.equal(BST.root.left.left.value, 1);
    assert.equal(BST.root.left.right.value, 6);

    assert.equal(BST.root.right.value, 10);
    assert.equal(BST.root.right.right.value, 14);
  });
});

describe("find()", () => {
  it("returns node with the same data.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    const six = BST.root.left.right;
    assert.deepEqual(BST.find(6), six);
  });
  it("returns falsy value if value not found.", () => {
    const BST = new BinarySearchTree();
    assert.isNotOk(BST.find(9999));
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14
    assert.isNotOk(BST.find(9999));
  });
});

describe("BFS()", () => {
  it("Works on empty tree.", () => {
    const BST = new BinarySearchTree();
    assert.deepEqual(BST.BFS(), []);
  });
  it("can traverse BF.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    const res = BST.BFS();
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.deepEqual(
      res.map((node) => node.value),
      [8, 3, 10, 1, 6, 14]
    );
  });
});

describe("DFS()", () => {
  it("Works on empty tree.", () => {
    const BST = new BinarySearchTree();
    assert.deepEqual(BST.DFS(), []);
  });
  it("can traverse DF.", () => {
    const BST = new BinarySearchTree();
    BST.insert(8);
    BST.insert(3);
    BST.insert(10);
    BST.insert(1);
    BST.insert(6);
    BST.insert(14);
    const res = BST.DFS();
    //          8
    //        /   \
    //       3     10
    //      / \      \
    //     1   6     14

    assert.deepEqual(
      res.map((node) => node.value),
      [8, 3, 1, 6, 10, 14]
    );
  });
  it("can traverse DF Postorder.", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(15);
    BST.insert(20);
    BST.insert(6);
    BST.insert(8);
    BST.insert(3);
    const res = BST.DFSPostorder();
    //          10
    //        /   \
    //       6     15
    //      / \      \
    //     3   8     20

    assert.deepEqual(
      res.map((node) => node.value),
      [3, 8, 6, 20, 15, 10]
    );
  });
});

mocha.run();
