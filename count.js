// JavaScript 代码
var score = {
  home: 0,
  away: 0,
  history: [] // 用于记录历史计分的数组
};

function updateScoreboard() {
  document.getElementById("homeScore").textContent = score.home;
  document.getElementById("awayScore").textContent = score.away;
}

function incrementScore(team) {
  score[team]++;
  score.history.push({ team: team, action: "increment" }); // 将增加计分的操作记录到历史数组
  updateScoreboard();
}

function decrementScore(team) {
  if (score[team] > 0) {
    score[team]--;
    score.history.push({ team: team, action: "decrement" }); // 将减少计分的操作记录到历史数组
    updateScoreboard();
  }
}

function undo() {
  if (score.history.length > 0) {
    var lastAction = score.history.pop(); // 取出最后一次的操作记录
    if (lastAction.action === "increment") {
      score[lastAction.team]--;
    } else if (lastAction.action === "decrement") {
      score[lastAction.team]++;
    }
    updateScoreboard();
  }
}

function editTeamName(team) {
  window.location.href = "edit.html?team=" + team; // 导航到编辑页面，并传递队名参数
}
