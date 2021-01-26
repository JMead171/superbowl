// Declare variables
let startGameEl = document.querySelector('.kick-off');
let flipCoin = document.querySelector('.lets-go');
let errorEl = document.querySelector('.error-msg');
let homeTeamEl = document.querySelector('#home-team');
let awayTeamEl = document.querySelector('#away-team');
let homeName = "";
let awayName = "";



let startGame = function (homeTeam, awayTeam) {
    homeTeamEl.innerHTML = "";
    awayTeamEl.innerHTML = "";
    let startGameEl = document.querySelector('.lets-go');
    let startGM = document.createElement('p');
    startGameEl.appendChild(startGM);
    startGM.innerHTML = `Welcome to the start of the ${homeTeam} vs. ${awayTeam} football game.`;
    let coinEl = document.querySelector('.lets-go');
    let coinFlip = document.createElement('button');
    coinEl.appendChild(coinFlip);
    coinFlip.innerHTML = "Heads or Tails";
    coinFlip.id = "head-tails";
}


// Get team names
let getTeams = function (event) {
    event.preventDefault();
    errorEl.textContent = "";
    let homeTeam = homeTeamEl.value.trim(); 
    let awayTeam = awayTeamEl.value.trim(); 
    if (!homeTeam || !awayTeam) {
        errorEl.textContent = "Please enter a home and away team";
    } else {
        homeName = homeTeam;
        awayName = awayTeam;
        startGame(homeTeam, awayTeam);
    }
};

let coinToss = function() {
    let heads = Math.floor(Math.random() * ((2-1)+1)+1);
    console.log(heads);
    heads === 1 ?  console.log(`${homeName} will recieve`) :  console.log(`${awayName} will recieve`);
    document.getElementById('head-tails').remove();
}


startGameEl.addEventListener("submit", getTeams);
flipCoin.addEventListener("click", coinToss);