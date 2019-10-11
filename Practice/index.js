window.addEventListener("load",init)

function init(){
    var click = document.querySelector(".button");
    click.addEventListener("click",print)
}

let arr = [
    [0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0]
]

function print(){
    var coach = document.querySelector(".coach");

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            var div = document.createElement("div");
            coach.appendChild(div); 
            div.className = "seats";
            console.log(1);
            if(arr[i][j]==1){
                div.style.backgroundColor = "red";
            }
        }
    }
}
