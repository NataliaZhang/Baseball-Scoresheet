
var score = {
  home: 0,
  away: 0,
  inning: 1,  // also formalized as score for simplicity
  history: []
};

function updateScoreboard() {
  document.getElementById("homeScore").textContent = score.home;
  document.getElementById("awayScore").textContent = score.away;
  document.getElementById("inning").textContent = Math.ceil(score.inning / 2);
}

function incrementScore(team) {
  score[team]++;
  score.history.push({ team: team }); // 将增加计分的操作记录到历史数组
  updateScoreboard();
  checkTriangles();
  
}

function undo() {
  if (score.history.length > 0) {
    var lastAction = score.history.pop(); // 取出最后一次的操作记录
    score[lastAction.team]--;
    updateScoreboard();
    checkTriangles();
  }
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

