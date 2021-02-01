// Declare variables
let startGameEl = document.querySelector('.kick-off');
let flipCoin = document.querySelector('.lets-go');
let errorEl = document.querySelector('.error-msg');
let homeTeamEl = document.querySelector('#home-team');
let awayTeamEl = document.querySelector('#away-team');
let runEl = document.querySelector('.pick-a-play');
let homeName = "";
let awayName = "";
let homeScore = 0;
let awayScore = 0;
let offense = "";
let defense = "";


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
    heads === 1 ?  receiveKick.innerHTML =  `${homeName} won the coin toss and will recieve` :  receiveKick.innerHTML = `${awayName} won the coin toss and will recieve`;
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
        heads ===1 ? domPrompt.innerHTML = `<span>now live...</span> ${awayName} kick off` : domPrompt.innerHTML = `<span>now live...</span> ${homeName} kick off`
    }, 3000);
    setTimeout(function() {
        let tdEl = document.querySelector('.lets-go');
        let tdReturn = document.createElement('p')
        tdEl.appendChild(tdReturn);
        let td = Math.floor(Math.random() * ((15-1)+1)+1);
        console.log(td);
        td === 7 ? tdReturn.innerHTML = `<span>now live...</span> 🏈 TOUCHDOWN ${recTeam}!!!!` : tdReturn.innerHTML = `<span>now live... </span> The ${recTeam} return the ball to the 25 yard line.`
        if (td === 7) {
            if (recTeam === homeName) {
                homeScore += 7;
                let scoreEl = document.querySelector('.home-score');
                scoreEl.innerHTML = homeScore;
            } else {
                let scoreEl = document.querySelector('.away-score');
                awayScore += 7;
                scoreEl.innerHTML = awayScore;
            } 
        }
        let playE1 = document.querySelector('.pick-a-play');
        let play1 = document.createElement('p')
        playE1.appendChild(play1);
        play1.innerHTML = `${recTeam} pick a play `;
        offense = recTeam;
        defense = kickTeam;
        play1.classList.add('pick-play');
        let playE2 = document.querySelector('.pick-a-play');
        let play2 = document.createElement('button')
        playE2.appendChild(play2);
        play2.innerHTML = "Run";
        play2.classList.add('run');
        play2.id = "run";

        let playE3 = document.querySelector('.pick-a-play');
        let play3 = document.createElement('button')
        playE3.appendChild(play3);
        play3.innerHTML = "Pass";
        play3.classList.add('pass');
        play3.id = "pass";
    }, 7000);

}

let runAplay = function(e) {
    document.getElementById('run').disabled = true;
    document.getElementById('pass').disabled = true;
    let pickEl = document.querySelector('.pick-a-play');
    let pickPlay = document.createElement('p')
    pickEl.appendChild(pickPlay);
    if (e.target.outerText === "Pass") {
        let td = Math.floor(Math.random() * ((7-1)+1)+1);
        console.log(td);
        if (td === 7) {
            pickPlay.innerHTML = `<span>now live...</span> 🏈 TOUCHDOWN ${offense}!! A long 75 yard pass from the QB.`
            if (offense === homeName) {
                homeScore += 7;
                let scoreEl = document.querySelector('.home-score');
                scoreEl.innerHTML = homeScore;
            } else {
                awayScore += 7;
                let scoreEl = document.querySelector('.away-score');
                scoreEl.innerHTML = awayScore;
            }
        } else {
            pickPlay.innerHTML = `${offense} pass is incomplete..kick a field `;
            let playE2 = document.querySelector('.pick-a-play');
            let play2 = document.createElement('button')
            playE2.appendChild(play2);
            play2.innerHTML = "FG";
            play2.classList.add('fg');
        }
    } else {
        let td = Math.floor(Math.random() * ((10-1)+1)+1);
        console.log(td);
        if (td === 7) {
            pickPlay.innerHTML = `<span>now live...</span> 🏈 TOUCHDOWN ${offense}!! Explosive 75 yard run from the running back.`
            if (offense === homeName) {
                homeScore += 7;
                let scoreEl = document.querySelector('.home-score');
                scoreEl.innerHTML = homeScore;
            } else {
                awayScore += 7;
                let scoreEl = document.querySelector('.away-score');
                scoreEl.innerHTML = awayScore;
            };
        } else {
            pickPlay.innerHTML = `${offense} defense stopped the run...kick a field `;
            let playE2 = document.querySelector('.pick-a-play');
            let play2 = document.createElement('button')
            playE2.appendChild(play2);
            play2.innerHTML = "FG";
            play2.classList.add('fg');
        }
    }; 
}

startGameEl.addEventListener("submit", getTeams);
flipCoin.addEventListener("click", startGame);
runEl.addEventListener("click", runAplay);
