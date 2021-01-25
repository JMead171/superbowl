// Declare variables
let startGameEl = document.querySelector('.kick-off');
let errorEl = document.querySelector('.error-msg');
let homeTeamEl = document.querySelector('#home-team');
// let homeTeam = "";
// let awayTeam = "";
let awayTeamEl = document.querySelector('#away-team');



let startGame = function (homeTeam, awayTeam) {
    homeTeamEl.innerHTML = "";
    awayTeamEl.innerHTML = "";
    let startGameEl = document.querySelector('.lets-go');
    let startGM = document.createElement('p');
    startGameEl.appendChild(startGM);
    startGM.innerHTML = `Welcome to the start of the ${homeTeam} vs. ${awayTeam} football game.`;
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
        startGame(homeTeam, awayTeam);
    }



    console.log(event);
};

startGameEl.addEventListener("submit", getTeams);