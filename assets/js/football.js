// Declare variables
let startGameEl = document.querySelector('.kick-off');
let errorEl = document.querySelector('.error-msg');
let homeTeamEl = document.querySelector('#home-team');
let awayTeamEl = document.querySelector('#away-team');
let runPlayEl = document.querySelector('.play-by-play');
let homeName = "";
let awayName = "";
let homeScore = 0;
let awayScore = 0;
let offense = "";
let defense = "";
let endOfGame = 0;

// Welcome teams
let welcome = function (homeTeam, awayTeam) {
    homeTeamEl.innerHTML = "";
    awayTeamEl.innerHTML = "";
    document.getElementById('startGame-btn').remove();
    let startGameEl = document.querySelector('.play-by-play');
    let startGM = document.createElement('p');
    startGameEl.appendChild(startGM);
    startGM.innerHTML = `Welcome to the start of the ${homeTeam} vs. ${awayTeam} football game.`;
    startGM.classList.add('welcome');
    let coinEl = document.querySelector('.play-by-play');
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

// Coin toss
let startGame = function() {
    let heads = Math.floor(Math.random() * ((2-1)+1)+1);
    let recKickEl = document.querySelector('.play-by-play');
    let receiveKick = document.createElement('p')
    recKickEl.prepend(receiveKick);
    heads === 1 ?  receiveKick.innerHTML =  `${homeName} won the coin toss and will receive` :  receiveKick.innerHTML = `${awayName} won the coin toss and will receive`;
    if (heads === 1) {
        defense = homeName;
        offense = awayName;
    } else {
        defense = awayName;
        offense = homeName;
    };
    document.getElementById('head-tails').remove();
    kickOff();
}

// Kickoff
let kickOff = () => {
    setTimeout(function() {
        let domEl = document.querySelector('.play-by-play');
        let domPrompt = document.createElement('p');
        domEl.prepend(domPrompt);
        domPrompt.innerHTML = `<span>now live...</span> ${offense} kick off`;
        let switchSides = offense;
        offense = defense;
        defense = switchSides;
    }, 3000);
    setTimeout(function() {
        let tdEl = document.querySelector('.play-by-play');
        let tdReturn = document.createElement('p')
        tdEl.prepend(tdReturn);
        let td = Math.floor(Math.random() * ((15-1)+1)+1);
        td === 7 ? tdReturn.innerHTML = `<span>now live...</span> 🏈 TOUCHDOWN ${offense}!!!!` : tdReturn.innerHTML = `<span>now live... </span> The ${offense} return the ball to the 25 yard line.`
        if (td === 7) {
            if (offense === homeName) {
                homeScore += 7;
                let scoreEl = document.querySelector('.home-score');
                scoreEl.innerHTML = homeScore;
            } else {
                let scoreEl = document.querySelector('.away-score');
                awayScore += 7;
                scoreEl.innerHTML = awayScore;
            } 
            kickOff();
        } else {
            let playE1 = document.querySelector('.play-by-play');
            let play1 = document.createElement('p')
            playE1.prepend(play1);
            play1.innerHTML = `${offense} pick a play <button id='run' class='run'>Run</button><button id='pass' class='pass'>Pass</button> `;
            play1.classList.add('pick-play');
        }
    }, 7000);

}

// Run a play
let runAplay = function(e) {
    if (endOfGame === 8) {
        document.getElementById('remove').remove();
        let pickEl = document.querySelector('.end-game');
        let pickPlay = document.createElement('h2')
        pickEl.prepend(pickPlay);
        console.log(homeScore, awayScore);
        if (homeScore > awayScore) {
            pickPlay.innerHTML = `THE ${homeName} WON THE GAME`;
        } else if (awayScore > homeScore) {
            pickPlay.innerHTML = `THE ${awayName} WON THE GAME`;
        } else {
            pickPlay.innerHTML = `THE GAME ENDED IN A TIE`;  
        }
        return;
    };

    endOfGame++;
    if (document.getElementById('run') != null) document.getElementById('run').remove();
    if (document.getElementById('pass') != null) document.getElementById('pass').remove();
    if (document.getElementById('fg') != null) document.getElementById('fg').remove();

    let pickEl = document.querySelector('.play-by-play');
    let pickPlay = document.createElement('p')
    pickPlay.classList.add('pick-play');
    pickEl.prepend(pickPlay);

    if (e.target.outerText === "Pass") {
        let td = Math.floor(Math.random() * ((7-1)+1)+1);
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
            kickOff();
        } else {
            pickPlay.innerHTML = `<span>now live...</span> ${offense} pass is incomplete..kick a field <button class='fg' id='fg'>FG</button>`;
        }
    } else if (e.target.outerText === "Run") {
        let td = Math.floor(Math.random() * ((10-1)+1)+1);
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
            }
            kickOff();
        } else {
            pickPlay.innerHTML = `<span>now live...</span> ${defense} defense stopped the run...kick a field <button id='fg' class='fg'>FG</button> `;
        }
    } else {
        let fieldG = Math.floor(Math.random() * ((4-1)+1)+1);
        if (fieldG === 3) {
            pickPlay.innerHTML = `<span>now live...</span> 🙌 FIELD GOAL ${offense}!! kick went straight through the uprights.`
            if (offense === homeName) {
                homeScore += 3;
                let scoreEl = document.querySelector('.home-score');
                scoreEl.innerHTML = homeScore;
            } else {
                awayScore += 3;
                let scoreEl = document.querySelector('.away-score');
                scoreEl.innerHTML = awayScore;
            }
            kickOff();
        } else {
            pickPlay.innerHTML = `<span>now live...</span> ${defense} defense blocked field goal attemp and take over on downs`;
            let switchSides = offense;
            offense = defense;
            defense = switchSides;
            let playE1 = document.querySelector('.play-by-play');
            let play1 = document.createElement('p')
            playE1.prepend(play1);
            play1.innerHTML = `${offense} pick a play <button id='run' class='run'>Run</button><button id='pass' class='pass'>Pass</button> `;
            play1.classList.add('pick-play');
          
        }
    }; 
}

startGameEl.addEventListener("submit", getTeams);
runPlayEl.addEventListener("click", function(e) {
    if (e.target.outerText === "Coin Flip") {
        startGame();
    } else {
        runAplay(e);
    }
});