
alert("WELL COME TO GAMES ARRAY")

let cont = document.querySelector('.cont2');
let btn = document.querySelector('button');
let myColor = ["red", "blue","green", "yellow","lightgreen"];
let myValues = document.querySelector("#myText")



function pick(){
    return parseInt(Math.random()*myColor.length)
}

btn.addEventListener("click", function picker(){
    if (myValues.value === myColor[pick()]){
        alert("Yes, you are correct")
        cont.style.backgroundColor = myValues.value;
    }
    else{
        alert("Sorry, you are wrong");
        cont.style.backgroundColor = "white"
    }
}
)



