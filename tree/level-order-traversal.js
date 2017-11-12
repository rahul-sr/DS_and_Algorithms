/**
 * LevelOrder Traversal
 *
 *      10
 *     /  \
 *    1	  12
 *   /   / \    
 *  0   5   13
 *
 * => 10, 1, 12, 0, 5, 13
 *
 */

function inOrder(tree) {
	// traverse left
	if(tree.left){
		inOrder(tree.left);
	}

	// print root
	console.log(tree.data);

	// trverse right
	if(tree.right){
		inOrder(tree.right);
	}
}

