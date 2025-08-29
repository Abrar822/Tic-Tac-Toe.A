let container = document.querySelector('.container');
let buttons = document.querySelectorAll('.button');
let title = document.querySelector('.title').querySelector('h1');
// on load animations
window.addEventListener('load', () => {
    let turn = 'X';
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
                }, 1000);
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
            disableAll();
        } else if(buttons[a].innerText === 'O' && buttons[c].innerText === 'O' && buttons[b].innerText === buttons[c].innerText) {
            msgr.style.visibility = 'visible';
            msg.innerText = `Player 'O' is the winner`;
            isWinner = true;
            disableAll();
        }
    }
    if(!isWinner && !allFilled) {
        msgr.style.visibility = 'visible';
        msg.innerText = `Match tied!`;
    }
}
// check all th buttons are filled or not
function allFilled() {
    buttons.forEach((button) => {
        if(button.innerText !== '') {
            return false;
        }
    })
    return true;
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
    let msgr = document.querySelector('.msgr');
    let msg = document.querySelector('.msg');
    buttons.forEach((button) => {
        button.style.pointerEvents = 'auto';
        button.innerText = '';
    })
    msg.innerText = '';
    msgr.style.visibility = 'hidden';
})
