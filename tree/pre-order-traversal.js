/**
 * PreOrder Traversal
 *
 *      10
 *     /  \
 *    1	  12
 *	 / \    \
 *  0   5   13
 *
 * => 10, 1, 0, 5, 12, 13
 *
 * print order -> root, left & right
 *
 */

function preOrder(tree) {

	// print root
	console.log(tree.data);

	// traverse left
	if(tree.left){
		preOrder(tree.left);
	}

	// trverse right
	if(tree.right){
		preOrder(tree.right);
	}
}

