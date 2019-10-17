var HashTable  =  function(size){
    this.buckets = Array(size);
    this.numbucket = this.buckets.length;
}

var Node = function(key,value,next){
    this.key = key;
    this.value = value;
    this.next = next||null;
}

HashTable.prototype.hash = function(key){
    var total = 0;
    for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i)
    }
    return total%this.numbucket;
}

HashTable.prototype.insert = function(key,value){
    var index = this.hash(key);
    if(!this.buckets[index]) this.buckets[index] = new Node(key,value);
    else if(this.buckets[index].key === key) this.buckets[index].value = value;
    else{
        var currentnode = this.buckets[index];
        while(currentnode.next){
            if(currentnode.key === key){
                currentnode.value = value;
                return; 
            }
            currentnode = currentnode.next;
        }
        currentnode.next = new Node(key,value);
    }
}