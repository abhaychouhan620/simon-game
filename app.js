let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let btns = ["red","yellow","green","blue"];

let main =  document.querySelector(".main");
let h3 = document.querySelector('h3');

document.addEventListener("keydown", function () {
    if(start === false) {
        start = true;
        levelUp();
    }    
});

function levelUp() {
    userSeq =[];
    level ++;
    h3.innerText = `Level ${level}`;
    let ranIn = chooseBtn();
    let ranColor = btns[ranIn];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    btnFlash(ranBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,500);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        reset();
    }
}

function chooseBtn() {
    return Math.floor(Math.random()*4);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash")
    },150);
}

let allBtns = document.querySelectorAll(".main div");

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userSeq.push(btn.id);

    checkAns(userSeq.length-1);
}

for( btn of allBtns ) {
    btn.addEventListener("click",btnPress );
}

function reset() {
    start = false;
    level = 0;
    gameSeq  = [];
    userSeq = [];
}