const gameover = new Audio("gameover.mp3");
const music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");

let turn = "X";
let isGameOver = false;

// for win
const isWin = function (){
    const block = document.querySelectorAll('.boxtext')
    wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach( (e)=>{
        if( block[e[0]].innerHTML !== "" && (block[e[0]].innerHTML === block[e[1]].innerHTML) && (block[e[0]].innerHTML === block[e[2]].innerHTML) ){
            isGameOver = true;
            document.getElementsByClassName("info")[0].innerText  = "Winner is " + block[e[0]].innerHTML;
            document.getElementById('reset').style.cssText = "background-color : red ; color: white; border: 2px solid white;"
        }
    } )
}

// music.play();
const changeturn = ()=>{
    return turn==="X"?"0":"X";
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach( (element) =>{
    element.addEventListener('click' , (e)=>{
        let boxText = element.querySelector('.boxtext');   
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            console.log(element)
            turn = changeturn();
            ting.play();
            isWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})
