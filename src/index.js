import { Tree } from './modules/bst/Tree.js';

const randomArray = Array.from({ length: 15 }, () =>
  Math.floor(Math.random() * 100)
);
const tree = new Tree(randomArray);

console.log('Is balanced:', tree.isBalanced());

console.log('Level Order:');
tree.levelOrder((node) => console.log(node.data));

console.log('In Order:');
tree.inOrder((node) => console.log(node.data));

console.log('Pre Order:');
tree.preOrder((node) => console.log(node.data));

console.log('Post Order:');
tree.postOrder((node) => console.log(node.data));

// Unbalance the tree
tree.insert(101);
tree.insert(102);
tree.insert(103);

console.log('Is balanced after unbalancing:', tree.isBalanced());

// Rebalance the tree
tree.rebalance();

console.log('Is balanced after rebalancing:', tree.isBalanced());

console.log('Level Order after rebalancing:');
tree.levelOrder((node) => console.log(node.data));
