/**
 * LevelOrder Traversal
 *
 *      10
 *     /  \
 *    1	  12
 *	 / \    \
 *  0   5   13
 *
 * => 10, 1, 12, 0, 5, 13
 *
 */

let arr = [];

function levelOrder(tree) {
	let head = null;

	// print root
	console.log(tree.data);

	if(tree.left){
		arr.push(tree.left);
	}

	if(tree.right){
		arr.push(tree.right);
	}

	if(arr.length){
		head = arr.shift();
		levelOrder(head);
	}
}

