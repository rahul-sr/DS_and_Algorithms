/**
* InOrder Traversal
* print order -> left, root & right
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

