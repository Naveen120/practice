
//1.) don't need to short the array

var linearSearch = function(arry,ele){
    for(let i=0;i<arry.length;i++){
        if(arry[i] === ele){
            return i;
        }
    }
    return -1;
}