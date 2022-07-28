const hour1 = document.getElementById("hour");
const mint1 = document.getElementById("minute");
const sec1  = document.getElementById("second");
const ampm  = document.getElementById("ampm");


function updateTime(){
    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    
    hour1.innerHTML = h < 10 ? "0" +h : h;
    mint1.innerHTML = m < 10 ? "0" + m : m
    sec1.innerHTML = s< 10 ? "0" + s : s;
    ampm.innerHTML = h>11 ? "PM" : "AM"


    setInterval(updateTime, 1000);
}

updateTime();

 