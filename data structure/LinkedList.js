var Linkedlist = function(){
    this.head;
    this.tail;
}

var Node = function(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var list = new Linkedlist();

Linkedlist.prototype.insertHead = function(value){
    var node = new Node(value,this.head,null);
    if(this.head) this.head.prev = node;
    else this.tail = node;
    this.head = node;
}

Linkedlist.prototype.insertTail = function(value){
    var node = new Node(value,null,this.tail);
    if(this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
}

Linkedlist.prototype.deleteHead = function(){
    if(!this.head) return false;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}

Linkedlist.prototype.indexOf = function(value){
    var indexes = [];
    var index = 0;
    var currentNode = this.head;
    while(currentNode){
        console.log(currentNode.value);
        if(currentNode.value === value){
            indexes.push(index);
        }
        index++;
        currentNode = currentNode.next;
    }
    return indexes;
}
Linkedlist.prototype.search = function(value){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === value){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}