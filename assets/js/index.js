let counter1 = document.querySelector(".counter-1 p");
let counter2 = document.querySelector(".counter-2 p");
let counter3 = document.querySelector(".counter-3 p");
let i = 0;
let y = 0;
let z = 0;
let flag = true;
let project=true;
let happy=true;
if (flag) {
    let interval = setInterval(function () {
        counter1.textContent = i;
        i++;
        if (i > 14) {
            clearInterval(interval);
            flag = false;
        }
    }, 100);
}
if (project) {
    let interval2 = setInterval(function () {
        counter2.textContent = y+"+";
        y++;
        if (y> 50) {
            clearInterval(interval2);
            project = false;
        }
    }, 40);
}
if (happy) {
    let interval3 = setInterval(function () {
        counter3.textContent = z;
        z++;
        if (z > 700) {
            clearInterval(interval3);
            happy = false;
        }
    }, 1);
}
