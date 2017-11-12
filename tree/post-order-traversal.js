/**
* PostOrder Traversal
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

