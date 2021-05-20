topFilms = [
    "The Godfather" ,
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];
 
eigenTopFilms = [];
 
//met deze for-loop word de ordered list gevuld met film namen
for (i = 0; i < topFilms.length; i++) {
    document.querySelector(".imdb-film" + (i + 1)).innerHTML = topFilms[i];
}
 
var filmnummer = 1;
 
function kiesFilm() {
    antwoord = prompt("Welke film staat voor jou op " + filmnummer);
    if(antwoord >= 0 && antwoord <= 10 )
    {
    eigenTopFilms.push(topFilms[antwoord]);
    naam = document.querySelector(".imdb-film" + antwoord).innerHTML;
    let toegevoegd1 = document.querySelector(".eigen-film" + filmnummer);
    toegevoegd1.innerHTML = naam;
    console.log(naam);
 
    document.querySelector(".imdb-film"+antwoord).style.textDecoration = "line-through";
    document.querySelector(".imdb-film"+antwoord).style.color = "red";
    
    filmnummer ++;
        if(filmnummer >= 4){
            document.querySelector('.kiesfilm-button').innerText = 'Klaar';
        }else{
            document.querySelector('.kiesfilm-button').innerText = 'Kies Film voor plek ' + filmnummer;
        }
    }
}