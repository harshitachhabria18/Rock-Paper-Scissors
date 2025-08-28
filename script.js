let getrock = document.querySelector("#rock");

let getpaper = document.querySelector("#paper");

let getscissor = document.querySelector("#scissor");

let yourscore = document.querySelector("#yourscore");

let compscore = document.querySelector("#compscore");

let complist = ["rock","paper","scissor"];

let getbut = document.querySelector("#displaybut");

let compcount = 0;

let yourcount = 0;

let getval = "rock";

let getclickrock = getrock.addEventListener("click",()=>{
    getval = "rock";
    checkfunc();
})

let getclickpaper = getpaper.addEventListener("click",()=>{
    getval = "paper";
    checkfunc();
})

let getclickscissor = getscissor.addEventListener("click",()=>{
    getval = "scissor";
    checkfunc();
})


let checkfunc = ()=>{

    const randomchoice = complist[Math.floor(Math.random() * complist.length)];

    if(getval === "rock" && randomchoice === "rock" || getval === "paper" && randomchoice === "paper" || getval === "scissor" && randomchoice === "scissor"){
        getbut.innerHTML = "Game Drawn!";
    }
    else if(getval === "rock" && randomchoice === "paper"){
        getbut.innerHTML = "You lost. Paper beats rock";
        compscore.innerHTML = ++compcount;
        
    }
    else if(getval === "paper" && randomchoice === "rock"){
        getbut.innerHTML = "You Won. Paper beats rock";
        yourscore.innerHTML = ++yourcount;
    }
    else if(getval === "paper" && randomchoice === "scissor"){
        getbut.innerHTML = "You lost. Scissor beats paper";
        compscore.innerHTML = ++compcount;
    }
    else if(getval === "scissor" && randomchoice === "paper"){
        getbut.innerHTML = "You Won. Scissor beats paper";
        yourscore.innerHTML = ++yourcount; 
    }
    else if(getval === "scissor" && randomchoice === "rock"){
        getbut.innerHTML = "You lost. Rock beats scissor";
        compscore.innerHTML = ++compcount;
    }
    else if(getval === "rock" && randomchoice === "scissor"){
        getbut.innerHTML = "You Won. Rock beats scissor";
        yourscore.innerHTML = ++yourcount;
    }
}