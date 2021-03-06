/**
 *  InOrder Traversal
 *
 *      10
 *     /  \
 *    1	  12
 *	 / \    \
 *  0   5   13
 *
 * => 0, 1, 5, 10, 12, 13
 *
 *  print order -> left, root & right
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

