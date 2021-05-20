var score = 0;
let getal1;
 
function makeRandomNumber() {
    return Math.floor(Math.random() * 99 + 1);
}
 
function showRandomNumber1() {
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}
 
function showRandomNumber2() {
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}
 
function geefAntwoord(antwoord) {
    var score = 0;
    getal1 = document.querySelector(".getal1").innerHTML;
    getal2 = document.querySelector(".getal2").innerHTML;
    score = document.querySelector(".score").innerHTML;
    if (getal1 > getal2 && antwoord == 'hoger') {
        score = score - 1 + 2;
        document.querySelector(".score").innerHTML = score;
        document.querySelector("body").style.backgroundColor = "green";
    }
    else if (getal1 < getal2 && antwoord == 'lager') {
        score = score - 1 + 2;
        document.querySelector(".score").innerHTML = score;
        document.querySelector("body").style.backgroundColor = "green";
    }
    if (getal1 < getal2 && antwoord == 'hoger') {
        score = score - 1;
        document.querySelector(".score").innerHTML = score;
        document.querySelector("body").style.backgroundColor = "red";
    }
    else if (getal1 > getal2 && antwoord == 'lager') {
        score = score - 1;
        document.querySelector(".score").innerHTML = score;
        document.querySelector("body").style.backgroundColor = "red";
    }
    showRandomNumber1();
    showRandomNumber2();
}
showRandomNumber1();
showRandomNumber2();