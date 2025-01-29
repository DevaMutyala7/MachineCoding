let boxes = [...document.getElementsByClassName("box")];

let board = [[], [], [], [], [], [], [], [], []];

let move = document.getElementById("");

let options = document.querySelectorAll("input[name='player-option']");

let result = document.getElementsByClassName("result")[0];

let userMove;
let botMove;

let currentMove = userMove;

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    userMove = e.target.value;
    botMove = userMove === "X" ? "O" : "X";
    option.disabled = true;
  });

  if (option.checked) {
    userMove = option.value;
    botMove = userMove === "X" ? "O" : "X";
  }
});

boxes.forEach((box, i) => {
  let clicked = false;
  box.addEventListener("click", () => {
    if (!clicked) {
      options.forEach((option) => {
        option.disabled = true;
      });
    }
    box.textContent = userMove;
    board[i] = userMove;
    clicked = true;

    if (checkStatus(board)) {
      let text = `${currentMove} is the Winer`;
      result.textContent = text;
      return;
    }

    //botmove
    currentMove = botMove;
    let bestIndex = bestMove(board);
    if (bestIndex !== undefined) {
      document.getElementsByClassName("box")[bestIndex].textContent = botMove;
      board[bestIndex] = botMove;
    }

    if (checkStatus(board)) {
      let text = `${currentMove} is the Winer`;
      result.textContent = text;
      return;
    }
    currentMove = userMove;
  });
});

function checkStatus(board) {
  //rows
  if (
    board[0] &&
    board[1] &&
    board[2] &&
    board[0] === board[1] &&
    board[1] === board[2]
  ) {
    return true;
  }
  if (
    board[3] &&
    board[4] &&
    board[5] &&
    board[3] === board[4] &&
    board[4] === board[5]
  ) {
    return true;
  }
  if (
    board[6] &&
    board[7] &&
    board[8] &&
    board[6] === board[7] &&
    board[7] === board[8]
  ) {
    return true;
  }
  //cols
  if (
    board[0] &&
    board[3] &&
    board[6] &&
    board[0] === board[3] &&
    board[3] === board[6]
  ) {
    return true;
  }
  if (
    board[1] &&
    board[4] &&
    board[7] &&
    board[1] === board[4] &&
    board[4] === board[7]
  ) {
    return true;
  }
  if (
    board[2] &&
    board[5] &&
    board[8] &&
    board[2] === board[5] &&
    board[5] === board[8]
  ) {
    return true;
  }

  //diagonals
  if (
    board[0] &&
    board[4] &&
    board[8] &&
    board[0] === board[4] &&
    board[4] === board[8]
  ) {
    return true;
  }
  if (
    board[2] &&
    board[4] &&
    board[6] &&
    board[2] === board[4] &&
    board[4] === board[6]
  ) {
    return true;
  }

  return false;
}

function bestMove(board) {
  let bestScore = -Infinity;
  let finalIndex;

  let myBoard = [...board];

  for (let i = 0; i < myBoard.length; i++) {
    if (!myBoard[i].length) {
      myBoard[i] = botMove;
      let score = minMax(myBoard, false);
      if (score > bestScore) {
        bestScore = score;
        finalIndex = i;
      }
      myBoard[i] = [];
    }
  }
  console.log("finalIndex", finalIndex);
  return finalIndex;
}

function minMax(board, isMaxmizing) {
  let winner = checkStatus(board);

  if (winner) {
    if (isMaxmizing) {
      return -1;
    } else {
      return 1;
    }
  } else {
    if (isDraw(board)) {
      return 0;
    }
  }

  if (isMaxmizing) {
    //bot playing
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i].length) {
        board[i] = botMove;
        bestScore = Math.max(bestScore, minMax(board, false));
        board[i] = [];
      }
    }
    return bestScore;
  } else {
    //user playing
    let bestScore = +Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i].length) {
        board[i] = userMove;
        bestScore = Math.min(bestScore, minMax(board, true));
        board[i] = [];
      }
    }
    return bestScore;
  }
}

function isDraw(board) {
  return board.find((box) => !box.length) ? false : true;
}
