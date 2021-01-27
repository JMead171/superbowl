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
    let recKickEl = document.querySelector('.lets-go');
    let receiveKick = document.createElement('p')
    recKickEl.appendChild(receiveKick);
    let recTeam = "";
    let KickTEam = "";
    heads === 1 ?  receiveKick.innerHTML =  `${homeName} will recieve` :  receiveKick.innerHTML = `${awayName} will recieve`;
    if (heads === 1) {
        recTeam = homeName;
        kickTeam = awayName;
    } else {
        recTeam = awayName;
        kickTeam = homeName;
    };
    document.getElementById('head-tails').remove();
    setTimeout(function() {
        let domEl = document.querySelector('.lets-go');
        let domPrompt = document.createElement('p');
        domEl.appendChild(domPrompt);
        heads ===1 ? domPrompt.innerHTML = `now live... ${awayName} kick off` : domPrompt.innerHTML = `now live... ${homeName} kick off`
    }, 4000);
    setTimeout(function() {
        let tdEl = document.querySelector('.lets-go');
        let tdReturn = document.createElement('p')
        tdEl.appendChild(tdReturn);
        let td = Math.floor(Math.random() * ((15-1)+1)+1);
        console.log(td);
        td === 7 ? tdReturn.innerHTML = `now live... 🏈 TOUCHDOWN ${recTeam}!!!!` : tdReturn.innerHTML = `now live... The ${recTeam} return the ball to the 25 yard line.`
    }, 8000);
}


startGameEl.addEventListener("submit", getTeams);
flipCoin.addEventListener("click", coinToss);