window.applicationCache.ondownloading=function() {
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    document.getElementById("log").innerHTML="Page Caching Started!";
}
window.applicationCache.onprogress=function(a) {
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    document.getElementById("log").innerHTML=(Math.round(100*(a.loaded/a.total)))+"%";
}
window.applicationCache.oncached=function() {
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    document.getElementById("log").innerHTML="Page Cached Successfully!";
    setTimeout(function(){document.getElementById("log").innerHTML="AppCache Completed. Now Turn Off the Internet & Reopen the Page."; }, 1500);
}