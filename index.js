
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let scoreListH = document.getElementById("listOfPointsH");
let scoreListG = document.getElementById("listOfPointsG");

let scoreH = 0;
let scoreG = 0;
let addedPoint = 0;

function addOnePoint(){

    scoreH ++;
    homeScore.textContent = scoreH;

    addedPoint = 1;

    scoreListH.textContent += "+ " + addedPoint;



}

function addTwoPoints(){

    scoreH +=2;
    homeScore.textContent = scoreH;

     addedPoint = 2;

    scoreListH.textContent += "+ " + addedPoint + " ";
}


function addThreePoints(){
    scoreH +=3;
    homeScore.textContent = scoreH;

     addedPoint = 3;

    scoreListH.textContent += "+ " + addedPoint + " ";
}


function addOnePointG(){

    scoreG ++;
    guestScore.textContent = scoreG;

     addedPoint = 1;

    scoreListG.textContent += "+ " + addedPoint + " ";


}

function addTwoPointsG(){

    scoreG +=2;
    guestScore.textContent = scoreG;
     addedPoint = 2;

    scoreListG.textContent += "+ " + addedPoint + " ";
}


function addThreePointsG(){
    scoreG +=3;
    guestScore.textContent = scoreG;

     addedPoint = 3;

    scoreListG.textContent += "+ " + addedPoint + " ";
}



function reset(){

    scoreH=0;
    scoreG=0;

    homeScore.textContent = scoreH;
    guestScore.textContent = scoreG;

    scoreListH.textContent = "List of points :";
    scoreListG.textContent = "List of points :";

  
}