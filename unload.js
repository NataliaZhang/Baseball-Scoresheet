// not work yet
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function(){
    console.log("禁止页面后退");
    history.pushState(null, null, document.URL);
});

window.onbeforeunload = function(){
    return "是否确定离开页面";
}