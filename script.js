const gameover = new Audio("gameover.mp3");
const music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");

let turn = "X";
let isGameOver = false;

// for win
const isWin = function (){
    const block = document.querySelectorAll('.boxtext')
    wins = [
        [0, 1, 2, 3, 4, 0],
        [3, 4, 5, 3, 12, 0],
        [6, 7, 8, 3, 19.5, 0],
        [0, 3, 6, -5, 11.4, 90],
        [1, 4, 7, 3, 11.4, 90],
        [2, 5, 8, 10.5, 11.4, 90],
        [0, 4, 8, 3, 12, 45],
        [2, 4, 6, 3, 12, 135],
    ]
    wins.forEach( (e)=>{
        if( block[e[0]].innerHTML !== "" && (block[e[0]].innerHTML === block[e[1]].innerHTML) && (block[e[0]].innerHTML === block[e[2]].innerHTML) ){
            isGameOver = true;
            document.getElementsByClassName("info")[0].innerText  = "Winner is " + block[e[0]].innerHTML;
            document.querySelector('img').style.display = 'block'
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "18vw";
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
            // console.log(element)
            turn = changeturn();
            ting.play();
            isWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})

const reset = document.getElementById('reset');
reset.addEventListener('click' , (e)=>{
    document.querySelector(".line").style.width = "0vw";
    const block = document.querySelectorAll('.boxtext');
    block.forEach( (item) =>{
        item.innerHTML = "";
    })
    document.querySelector('img').style.display = 'none'
    turn = "X"
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn
})
