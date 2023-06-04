var hr = document.getElementById('hrs');
var mins = document.getElementById('mins');
var secs = document.getElementById('secs');

setInterval(() => {
    var datenow = new Date;
    hr.innerHTML = (datenow.getHours() <=9  ) ? '0'+ datenow.getHours() : datenow.getHours();
    mins.innerHTML = (datenow.getMinutes() <=9  ) ? '0'+ datenow.getMinutes() : datenow.getMinutes();
    secs.innerHTML = (datenow.getSeconds() <=9  ) ? '0'+ datenow.getSeconds() : datenow.getSeconds();

    // var getcur = document.querySelector('.time');
    // getcur.style.setProperty('--my-va', 'hh');
}, 1000);

