
function Node(element)
{
    this.element = element;
    this.next = null;
}

function LList()
{
    this.head = new Node('head');
    this.head.next = this.head;
}

LList.prototype = {

    find : function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },

    insert : function (newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next == null ? this.head : current.next;
        current.next = newNode;
    },

    findPrevious : function (item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    },

    remove : function (item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    },

    display : function () {
        var currNode = this.head;
        while (!(currNode.next == null) &&
               !(currNode.next.element == 'head')) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

}