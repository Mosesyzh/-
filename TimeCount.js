function startTime() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var week = today.getDay();

    // var monthCh = ["一月","二月","三月","四月","五月","六月",
    //     "七月","八月","九月","十月","十一月","十二月"];
    var weekCh = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];

    month = checkTime(month);
    day = checkTime(day);
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    var week1 = weekCh[week];

    var nowTime = year + "/" + month + "/" + day + "," + week1 + "," + hour + ":" + min + ":" + sec;

    var clock = document.getElementById("timer");
    clock.innerHTML = nowTime;
}
function checkTime(i) {
    if(i<10){
        i = "0" + i;
    }
    return i;
}
window.setInterval("startTime()",1000);
