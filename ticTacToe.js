let container = document.querySelector('.container');
let buttons = document.querySelectorAll('.button');
let title = document.querySelector('.title').querySelector('h1');
let turn = 'X';
// on load animations
window.addEventListener('load', () => {
    let str = 'Tic-Tac-Toe';
    setTimeout(() => {
        container.style.visibility = 'visible';
    }, 200);
    for(let i = 0; i < str.length; i++) {
        setTimeout(() => {
            title.innerText += str[i];
        }, 100 * i);
    }
    setTimeout(() => {
        buttons.forEach((button, idx) => {
            setTimeout(() => {
                button.style.visibility = 'visible';
            }, 200 * idx)
            button.addEventListener('click', () => {
                if(turn != 'X') {
                    button.innerText = 'O';
                    turn = 'X';
                } else {
                    button.innerText = 'X';
                    turn = 'O';
                }
                button.style.pointerEvents = 'none';
                setTimeout(() => {
                    checkWinner(winnerSeq);
                }, 300);
            });
        });
    }, 200);
})
let winnerSeq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// to check the winner exist or not and who is he
function checkWinner(winnerSeq) {
    let isWinner = false
    let msgr = document.querySelector('.msgr');
    let msg = document.querySelector('.msg');
    for(let seq of winnerSeq) {
        let [a, b, c] = seq;
        if(buttons[a].innerText === 'X' && buttons[c].innerText === 'X' && buttons[b].innerText === buttons[c].innerText) {
            msgr.style.visibility = 'visible';
            msg.innerText = `Player 'X' is the winner`;
            isWinner = true;
            toggleCombinations(seq);
            disableAll();
            return;
        } else if(buttons[a].innerText === 'O' && buttons[c].innerText === 'O' && buttons[b].innerText === buttons[c].innerText) {
            msgr.style.visibility = 'visible';
            msg.innerText = `Player 'O' is the winner`;
            isWinner = true;
            toggleCombinations(seq);
            disableAll();
            return;
        }
    }
    if(!isWinner && allFilled()) {
        msgr.style.visibility = 'visible';
        msg.innerText = `Match tied!`;
        disableAll();
        isWinner = false;
    }
}
// function to toggle color of combinations
function toggleCombinations(seq) {
    for(let a of seq) {
        if(buttons[a].style.backgroundColor !== '#ccc5b9') {
            buttons[a].style.backgroundColor = '#ccc5b9';
        } else {
            buttons[a].style.backgroundColor = '#dedbd2';
        }
    }
}
// check all th buttons are filled or not
function allFilled() {
    return Array.from(buttons).every(button => button.innerText !== '');
}
// to disable all buttons
function disableAll() {
    buttons.forEach((button) => {
        button.style.pointerEvents = 'none';
    })
}
// play again button
let playAgain = document.querySelector('.btns');
playAgain.addEventListener('click', () => {
    turn = 'X';
    let msgr = document.querySelector('.msgr');
    let msg = document.querySelector('.msg');
    buttons.forEach((button) => {
        button.style.pointerEvents = 'auto';
        button.innerText = '';
    })
    msg.innerText = '';
    msgr.style.visibility = 'hidden';
    container.style.visibility = 'hidden';
    buttons.forEach((button) => {
            button.style.visibility = 'hidden';
        });
    setTimeout(() => {
        setTimeout(() => {
        container.style.visibility = 'visible';
    }, 100);
        buttons.forEach((button, idx) => {
            button.style.backgroundColor = '#dedbd2';
            setTimeout(() => {
                button.style.visibility = 'visible';
            }, 200 * idx)
        });
    }, 200);
})
