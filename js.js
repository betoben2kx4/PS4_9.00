function load() {
    showdate();jsChk();Sys();
}
function showdate() {
    var dt = new Date();
    Hour = dt.getHours();
    Minute = dt.getMinutes();
    Day = dt.getDate();
    Month = dt.getMonth()+1;
    Year = dt.getFullYear();
    if (Minute < 10){
        Minute = "0" + Minute
    }
    if (Hour < 10){
        Hour = "0" + Hour
    }
    document.getElementById("date").innerHTML = (Day+"/"+Month+"/"+Year);
    document.getElementById("clock").innerHTML = (Hour+":"+Minute);
    setInterval(showdate,10000);
}
function jsChk() {
    document.getElementById("jsChk").innerHTML = "JavaScript Enabled: " + navigator.javaEnabled()
}
function Sys() {
    var idk = navigator.userAgent;
    var SystemShow = idk.substring(idk.indexOf("5.0 (") + 19, idk.indexOf(") Apple"));
    document.getElementById("Sys").innerHTML = "System: " + SystemShow
}
function loadmsg() {
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    document.getElementById('log').innerHTML = 'Insert USB Now or Wait if you are Using ESP8266 (Soldered)...!'
}
