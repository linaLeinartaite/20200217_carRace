"use strict";

const btnStart = document.getElementById("btn-start");
const btn = document.querySelector(".btn-white");

btnStart.addEventListener("click", function () {
    // btn.innerHTML = "PAUSE";
    if (btn.innerHTML === "START") {
        btn.innerHTML = "RESTART";
        console.log(btn, btn.innerHTML);
        step();
    }
    else {
        btn.innerHTML = "RESTART";
        console.log(btn, btn.innerHTML);
        window.location.reload();
    }

});
