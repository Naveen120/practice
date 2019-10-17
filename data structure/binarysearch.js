var binarysearch = function(array,ele,start,end){
    if(start>end) return false;
    var mid = Math.floor((start+end)/2);
    if(array[mid] ===  ele) return mid;   // best case
    if(array[mid] < ele) return binarysearch(array,ele,mid+1,end);
    if(array[mid] > ele) return binarysearch(array,ele,start,mid-1);  
}