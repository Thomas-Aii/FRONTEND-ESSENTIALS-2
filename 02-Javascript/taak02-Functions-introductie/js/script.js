let strNaam
function Welkom(){
    alert("Welkom op deze pagina!");
}
function Naam(){
   strNaam = prompt("Wat is jou naam?");
}
function OK(){
    if(BooleanOK = confirm()){
        console.log("Ok");
    }
    else{
        console.log("dan niet");
    }
}
Welkom();
console.log(Naam());
OK();