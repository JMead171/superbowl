// Declare variables
let startGameEl = document.querySelector('.kick-off');
let flipCoin = document.querySelector('.lets-go');
let errorEl = document.querySelector('.error-msg');
let homeTeamEl = document.querySelector('#home-team');
let awayTeamEl = document.querySelector('#away-team');
let homeName = "";
let awayName = "";
let homeScore = 0;
let awayScore = 0;


let welcome = function (homeTeam, awayTeam) {
    homeTeamEl.innerHTML = "";
    awayTeamEl.innerHTML = "";
    document.getElementById('startGame-btn').remove();
    let startGameEl = document.querySelector('.lets-go');
    let startGM = document.createElement('p');
    startGameEl.appendChild(startGM);
    startGM.innerHTML = `Welcome to the start of the ${homeTeam} vs. ${awayTeam} football game.`;
    startGM.classList.add('welcome');
    let coinEl = document.querySelector('.lets-go');
    let coinFlip = document.createElement('button');
    coinEl.appendChild(coinFlip);
    coinFlip.innerHTML = "Coin Flip   ";
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
        welcome(homeTeam, awayTeam);
    }
};

let startGame = function() {
    let heads = Math.floor(Math.random() * ((2-1)+1)+1);
    let recKickEl = document.querySelector('.lets-go');
    let receiveKick = document.createElement('p')
    recKickEl.appendChild(receiveKick);
    let recTeam = "";
    let KickTeam = "";
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
        if (td === 7) {
            if (recTeam === homeName) {
                homeScore += 7;
                let scoreEl = document.querySelector('.home-score');
                scoreEl.innerHTML = 7;
            } else {
                let scoreEl = document.querySelector('.away-score');
                awayScore += 7;
                scoreEl.innerHTML = 7;
            } 
        }
    }, 8000);
    let playE1 = document.querySelector('.lets-go');
    let play1 = document.createElement('p')
    playE1.appendChild(play1);
    play1.innerHTML = `${recTeam} pick a play `;
    let playE2 = document.querySelector('.lets-go');
    let play2 = document.createElement('button')
    playE2.appendChild(play2);
    play2.innerHTML = "Run";
    let playE3 = document.querySelector('.lets-go');
    let play3 = document.createElement('button')
    playE3.appendChild(play3);
    play3.innerHTML = "Pass";
}


startGameEl.addEventListener("submit", getTeams);
flipCoin.addEventListener("click", startGame);