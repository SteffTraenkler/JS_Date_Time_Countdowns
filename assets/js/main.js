//Lev1_1
console.log('%cLev1_1', 'color: darkred; font-weight:900');

let date1 = new Date('September 2, 2019 09:00:00');
console.log(date1);
let date2 = new Date(0);
console.log(date2);
let date3 = new Date(31556908800);
console.log(date3);
let date4 = new Date(86400000);
console.log(date4);

let out1 = document.getElementById('date1');

out1.innerHTML = `<p>${date1} = new Date('September 2, 2019 09:00:00')</p> <p>${date2} = new Date(0)</p> <p>${date3} = new Date(31556908800)</p> <p>${date4}= new Date(86400000)</p>`

//Lev1_2
console.log(' ');
console.log('%cLev1_2', 'color: darkred; font-weight:900');

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
let out2 = document.getElementById('out2');

let currentDate1 = new Date();
console.log(new Date());
out2.innerHTML += `<p>${currentDate1}</p>`;
out2.innerHTML += `<p>${currentDate1.getFullYear()}</p>`;
out2.innerHTML += `<p>${currentDate1.getMonth()} Monat</p>`;
out2.innerHTML += `<p>${currentDate1.getDay()} Tag</p>`;
out2.innerHTML += `<p>${currentDate1.getHours()} Stunde</p>`;
out2.innerHTML += `<p>${currentDate1.getMinutes()} Minute</p>`;
out2.innerHTML += `<p>${wochenTag[currentDate1.getDay()]}</p>`;
out2.innerHTML += `<p>${monate[currentDate1.getMonth()]}</p>`;

//Clock
let clock = document.getElementById('clock');

let days = ['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function currentTime() {
    let dateClock = new Date();
    let dd = days[dateClock.getDay()];
    let hh = dateClock.getHours();
    let mm = dateClock.getMinutes();
    let ss = dateClock.getSeconds();
    let aPM = 'AM';

    if (hh == 0) {
        hh = 12;
    } else if (hh > 12) {
        hh = hh - 12;
        aPM = 'PM';
    }

    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;

    let time = dd + ' ' + hh + ':' + mm + ':' + ss + ' ' + aPM;
    let t = setTimeout(function () { currentTime() }, 1000);
    clock.innerHTML = time;
}
currentTime()

//Lev1_6
console.log(' ');
console.log('%cLev1_6', 'color: darkred; font-weight:900');

let date61 = new Date(1999, 10, 5, 15); //PM
let date62 = new Date();
let date63 = new Date(2019, 12, 3, 12); //AM
let date64 = new Date(2000, 1, 1, 11); //AM

function session(x) {
    let x2 = x.getHours();
    if (x2 > 12) {
        x2 = x2 - 12;
        console.log(x + '-> PM');
    } else {
        console.log(x + '-> AM');
    }
}
session(date61);
session(date62);
session(date63);
session(date64);

//Lev1_7
console.log(' ');
console.log('%cLev1_7', 'color: darkred; font-weight:900');


function weekend(a) {
    let d = new Date(a)
    if (d.getDay() == 6 || d.getDay() == 0) {

        console.log('Day ' + d + ' of the Week');
        console.log('Weekend!');
    } else {
        console.log('Day ' + d + ' of the Week')
        console.log('Working Day');
    }
}
console.log('TEST1: ' + new Date('2019. 12. 15'));
weekend('12.15.2019');

console.log('TEST2: ' + new Date('2.16.2001'));
weekend('2001. 2. 16');

console.log('TEST3: ' + new Date('2020. 1. 2'));
weekend('1.2.2020');

console.log('TEST4: ' + new Date('2020. 2. 29'));
weekend('2.29.2020');

// console.log(new Date());
// console.log(new Date().getDay());
weekend(new Date());



//Lev1_9
console.log(' ');
console.log(' ');
console.log('%c Lev1_9', 'color:darkred; font-weight:900');

let clockTime = document.getElementById('text');

let wochenTage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

function startTime() {
    let dateClock = new Date();
    let dd2 = wochenTage[dateClock.getDay()];
    let day = dateClock.getDate();
    let monthy = dateClock.getMonth() + 1;
    let yeary = dateClock.getFullYear();
    let hh2 = dateClock.getHours();
    let mm2 = dateClock.getMinutes();
    let ss2 = dateClock.getSeconds();
    let aPM2 = 'AM';

    if (hh2 == 0) {
        hh2 = 12;
    } else if (hh2 > 12) {
        hh2 = hh2 - 12;
        aPM2 = 'PM';
    }

    hh2 = (hh2 < 10) ? '0' + hh2 : hh2;
    mm2 = (mm2 < 10) ? '0' + mm2 : mm2;
    ss2 = (ss2 < 10) ? '0' + ss2 : ss2;

    let time2 = dd2 + ', der ' + day + '. ' + monthy + '. ' + yeary + `<br> Uhrzeit: ` + ' ' + hh2 + ' std ' + mm2 + ' min ' + ss2 + ' sec : ' + aPM2;
    let o = setTimeout(function () { startTime() }, 1000);
    clockTime.innerHTML = time2;
}
startTime()


//Lev1_8
console.log(' ');
console.log('%c Lev1_8', 'color:darkred; font-weight:900');

//Zeit zeigen
// setInterval(function () {
//     var date = new Date();
//     var zeit = date.toLocaleTimeString();
//     console.log(zeit);
// }, 10000);

let count = document.getElementById('countdown');

let timeleft = 10; // The countdown max you're setting
let timer = setInterval(function () { //variable timer needed for clearInterval
    if (timeleft < 0) {
        clearInterval(timer); //stops the function/loop
        count.innerHTML = `<h3>Countdown finished</h3>`
    } else {
        console.log(timeleft);
        count.innerHTML = `<h3>${timeleft} seconds</h3>`
    }
    timeleft -= 1; //important to reduce timeleft by one(1) since setInterval acts like a loop
}, 1000); // 1000 -> 1 second interval