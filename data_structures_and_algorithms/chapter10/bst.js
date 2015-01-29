
function Node(data, left, right)
{
    this.data = data;
    this.left = left;
    this.right = right;
}

Node.prototype = {
    show : function () {
        return this.data;
    }
}

function BST()
{
    this.root = null;
}

BST.prototype = {

    insert : function (data) {
        var n = new Node(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    },

    find : function (data) {
        var current = this.root;
        while (current != null) {
            if (current.data == data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    },

    getMin : function () {
        var current = this.root;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    },

    getMax : function () {
        var current = this.root;
        while (!(current.right == null)) {
            current = current.right;
        }
        return current.data;
    },

    remove : function (data) {
        root = this.removeNode(this.root, data);
    },

    removeNode : function (node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // 没有子节点的节点
            if (node.left == null && node.right == null) {
                return null;
            }
            // 没有左子节点的节点
            if (node.left == null) {
                return node.right;
            }

            if (node.right == null) {
                return node.left;
            }

            var tempNode = this.getMin();
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
    }

}



function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}