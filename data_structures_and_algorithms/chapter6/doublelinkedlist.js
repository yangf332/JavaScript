
function Node(element)
{
    this.element = element;
    this.next = null;
    this.previous = null;
}

function DLList()
{
    this.head = new Node('head');
}

DLList.prototype = {

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
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    },

    //findPrevious : function (item) {
    //    var currNode = this.head;
    //    while (!(currNode.next == null) &&
    //    (currNode.next.element != item)) {
    //        currNode = currNode.next;
    //    }
    //    return currNode;
    //},

    remove : function (item) {
        var currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    },
    
    findLast : function () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }

        return currNode;
    },

    fispReverse : function () {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.prefix == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    },

    display : function () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

}