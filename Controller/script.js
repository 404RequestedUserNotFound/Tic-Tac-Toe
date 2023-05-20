const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let moves = [];


cells.forEach(cell => 
    {
        cell.addEventListener('click', Clicks, { once: true });
    });


function Clicks(e) 
{
  const cell = e.target;
  cell.textContent = currentPlayer;
  moves.push(cell);
  checkForWin();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function undoMove() 
{
  if (moves.length > 0) 
  {
    const lastMove = moves.pop();
    lastMove.textContent = '';
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}


function checkForWin() 
{
  const WinningCombination = 
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  for (let WinningCombinations of WinningCombination) 
  {
    if (
      cells[WinningCombinations[0]].textContent === currentPlayer &&
      cells[WinningCombinations[1]].textContent === currentPlayer &&
      cells[WinningCombinations[2]].textContent === currentPlayer
    ) {
      alert(`Congratulations ${currentPlayer} wins the game!`);
      resetGame();
      return;
    }
  }


  if (Array.from(cells).every(cell => cell.textContent !== '')) 
  {
    alert("Oops, this game is a tie!");
    resetGame();
    return;
  }
}


function resetGame() 
{
  cells.forEach(cell => 
    {
        cell.textContent = '';
        cell.removeEventListener('click', Clicks);
        cell.addEventListener('click', Clicks, { once: true });
    });
  moves = [];
}
