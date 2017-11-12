/**
 * PostOrder Traversal
 *
 *      10
 *     /  \
 *    1	  12
 *	 / \    \
 *  0   5   13
 *
 * => 0, 5, 1, 13, 12, 10
 *
 * print order -> left, right and root
 *
 */

function postOrder(tree) {

	// traverse left
	if(tree.left){
		postOrder(tree.left);
	}

	// trverse right
	if(tree.right){
		postOrder(tree.right);
	}

	// print root
	console.log(tree.data);
}

