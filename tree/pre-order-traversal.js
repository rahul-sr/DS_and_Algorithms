/**
* PreOrder Traversal
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

