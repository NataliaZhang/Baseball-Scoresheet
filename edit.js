// edit.js
function saveTeamName() {
    // var team = getParameterByName("team");
    var teamName_home = document.getElementById("teamName_home").value;
    var teamName_away = document.getElementById("teamName_away").value;
    document.getElementById("HomeTeamName").textContent = teamName_home;
    document.getElementById("AwayTeamName").textContent = teamName_away;
    localStorage.setItem('HomeTeamName', teamName_home);
    localStorage.setItem('AwayTeamName', teamName_away);
    window.location.href = "index.html"; // 返回主页面
}


// function getParameterByName(name) {
//     var url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }
