
var score = {
  home: 0,
  away: 0,
  inning: 1,  // also formalized as score for simplicity
  strike: 0,
  ball: 0,
  history: []
};

function updateScoreboard() {
  document.getElementById("homeScore").textContent = score.home;
  document.getElementById("awayScore").textContent = score.away;
  document.getElementById("inning").textContent = Math.ceil(score.inning / 2);
  document.getElementById("strike").textContent = score.strike;
  document.getElementById("ball").textContent = score.ball;
}

function incrementScore(team) {
  score.history.push({ home:score.home, away:score.away, 
    inning:score.inning, strike:score.strike, ball:score.ball });
  if ((team == 'ball' && score[team] == 3) || (team == 'strike' && score[team] == 2)) {
    score['ball'] = 0;
    score['strike'] = 0;
  }
  else {
    score[team]++;
  }
  updateScoreboard();
  checkTriangles();
}

function decrementScore(team) {
  if (score[team] > 0){
    score.history.push({ home:score.home, away:score.away, 
    inning:score.inning, strike:score.strike, ball:score.ball });
    score[team]--;
    updateScoreboard();
    checkTriangles();
  }
    
}

function undo() {
  if (score.history.length > 0) {
    var lastState = score.history.pop();
    score.home = lastState.home;
    score.away = lastState.away;
    score.inning = lastState.inning;
    score.strike = lastState.strike;
    score.ball = lastState.ball;
    updateScoreboard();
    checkTriangles();
  }
}

function resetBall() {
  score.history.push({ home:score.home, away:score.away, 
    inning:score.inning, strike:score.strike, ball:score.ball });
  score.ball = 0;
  score.strike = 0;
  updateScoreboard();
  checkTriangles();
}

function checkTriangles() {
  if (score.inning % 2 != 0) {
    document.getElementById("upTriangle").style.color = "black";
    document.getElementById("downTriangle").style.color = "gray";
  }
  else {
    document.getElementById("upTriangle").style.color = "gray";
    document.getElementById("downTriangle").style.color = "black";
  }
}

