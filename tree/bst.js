function BST(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(data) {
    let head = this;
	let node = new BST(data);
	if(head.data > data) {
		if(!head.left) {
			head.left = node;
		} else {
			head.left.insert(data);
		}
	} else {
		if(!head.right) {
			head.right = node;
		} else {
			head.right.insert(data);
		}
	}
}

let root = new BST(10);
root.insert(1);
root.insert(12);
root.insert(13);
root.insert(5);
root.insert(0);