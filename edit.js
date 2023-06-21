// JavaScript 代码
function saveTeamName() {
    var team = getParameterByName("team");
    var teamName = document.getElementById("teamName").value;
    document.getElementById(team + "TeamName").textContent = teamName;
    window.location.href = "index.html"; // 返回主页面
  }
  
  function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }