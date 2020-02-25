"use strict"


const allCars = [
    new Car("Car-1", "car-1.png"),
    new Car("Car-2", "car-2.png"),
    new Car("Car-3", "car-3.png"),
    new Car("Car-4", "car-4.png"),
    new Car("Car-5", "car-5.png"),
    new Car("Car-6", "car-6.png"),
    new Car("Car-7", "car-7.png"),
    new Car("Car-8", "car-8.png"),
    new Car("Car-9", "car-9.png"),
    new Car("Car-10", "car-10.png"),
    new Car("Car-11", "car-11.png")
];
// console.log(allCars);

// while (Math.max((document.querySelector(`#car-${i + 1} > img`).style.left)) {
function step() {

    let winPos = 0;
    while (winPos <= window.innerWidth - 120) {
        let positionArr = [];
        // if( positionArr[0])

        allCars.forEach((car) => {
            let step = Math.random();
            if (step < 0.4) {
                //jei stabdo tai greitis turi pasikeist per  1-10; 
                car.slowDown(Math.random() * 11); //!! nes generuoja skaiciu iki vieneto, bet vieneto neiskaitant !!

                //jei gazuoja tai per 1-15;
            } else {
                car.speedUp(Math.random() * 16); //!! 
            }
            //ir tada turi pajudeti per toki atstuma:  
            car.go();
            positionArr.push(car.position);
            // console.log(car.name, car.position);
        });


        for (let i = 0; i < allCars.length; i++) {
            document.querySelector(`#car-${i + 1} > img`).style.left = ((Math.round(allCars[i].position) + "px"));
            // console.log(allCars[i].name, " ", (Math.round(allCars[i].transition)));
            // document.querySelector(`#car-${i + 1} > img`).style[transition - delay] = 1;
        }
        positionArr.sort((a, b) => { return b - a });
        console.log(positionArr);
        allCars.forEach(car => {
            if (car.position === positionArr[0]) {
                console.log("The winnig Car is " + car.name + " " + car.position);
            }
        });


        //vaziuos iki tol kol paskutine masinyte pasieks finish'a
        winPos = positionArr[positionArr.length - 1];

    }
    // document.location.reload();
    // setTimeout("window.location.reload()", TotalTimeNeededbyThheAnimationInmiliseconds);

}
// function sorting(array) {
//     allCars.sort(function (a, b) {
//         return b.position - a.position;
//     });
//     console.log(allCars);
//     console.log(allCars[0].name, allCars[0].position);

// }
// console.log(window.innerWidth,
//     window.outerWidth);



