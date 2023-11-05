var hittarget = 0;
var score = 0;



function bubble (){
let bubblein = "";

for (var i=1; i<=300; i++){
let random = Math.floor(Math.random()*10)
bubblein +=  `<div class="bubble">${random}</div>`
}

document.querySelector('.pbtm').innerHTML = bubblein;

}

function BubbleTimer (){
var timer = 60;
function runTime (){
  var timeint =  setInterval(function(){
        if (timer > 0){
        timer--;
        document.querySelector("#timeval").textContent = timer;
        }

        else {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = "";
        }
    }, 1000);
}

runTime();
}

function hitfu () {

hittarget = Math.floor(Math.random()*10)
document.querySelector("#hitval").textContent = hittarget;

}

 function increasescore (){
    score += 10;
    document.querySelector("#Scoreval").textContent = score;
}

function click (){
document.querySelector(".pbtm").addEventListener("click", function (dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hittarget){
        increasescore();
        hitfu();
    }
})
}




click ();
hitfu();
BubbleTimer();
bubble();



