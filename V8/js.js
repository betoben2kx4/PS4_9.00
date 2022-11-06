function load() {
    onlineChk();sysinfo()
}
function onlineChk() {
    var check = navigator.onLine
    if (check == true) {
        document.getElementById("onlineCheckResult").innerHTML = "Online"
    }else {
        document.getElementById("onlineCheckResult").innerHTML = "Cached"
    }
}
function sysinfo() {
    document.getElementById("sysinfo").innerHTML = navigator.userAgent
}
function GMJS() {
    var check = document.getElementById("GM").style
    var check2 = document.getElementById("LM").style
    if (check.display == "none") {
        check.display = "block"
        check2.display = "none"
    }else if (check.display == "block") {
        check.display = "none"
    }
}
function LMJS() {
    var check = document.getElementById("LM").style
    var check2 = document.getElementById("GM").style
    if (check.display == "none") {
        check.display = "block"
        check2.display = "none"
    }else if (check.display == "block") {
        check.display = "none"
    }
}

function loadmsg() {
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    document.getElementById('log').innerHTML = 'Insert USB Now...Triggering Exploit!'
}
function ani2() {
    document.getElementById('notify').className = 'notification2'
    setTimeout(hide, 400)
}
function hide() {
    document.getElementById('notify').style.display = 'none'
    document.getElementById('TimeoutScale').className = ''
}

// AppCache
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
    document.getElementById('TimeoutScale').className = 'loading'
    document.getElementById("log").innerHTML="Page Cached Successfully!";
    setTimeout(function(){document.getElementById("log").innerHTML="AppCache Completed. Now Turn Off the Internet & Reopen the Page.";}, 1000);
    setTimeout(ani2, 5000);
}

//GoldHEN
function GoldHEN212() {
    PLfile = "GoldHEN212.bin";
    setTimeout(poc, 100);
}
function GoldHEN224() {
    PLfile = "GoldHEN212.bin";
    setTimeout(poc, 100);
}
function GoldHEN225b7() {
    PLfile = "GoldHEN212.bin";
    setTimeout(poc, 100);
}