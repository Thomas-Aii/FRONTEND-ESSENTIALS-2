let strNaam;
let boolNaamKlopt;
strNaam = prompt("Hoe heet je?");
if(boolNaamKlopt = confirm("heet je echt " + strNaam +"?")){
    alert("Welkom " + strNaam + "!");
}
else{
    strNaam = prompt("Nogmaals hoe heet je?");
if(boolNaamKlopt = confirm("Heet je echt " + strNaam + "?")){
    alert("Welkom " + strNaam + "!");
}
else{
    alert("Ok, evengoed welkom!");
}
}