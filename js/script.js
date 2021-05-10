/* Descrizione:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età. */

var tag = document.getElementById("studente");
var tag2 = document.getElementById("studenti");

//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome : "Giada",
    cognome : "Meloni",
    eta : 29
}

//console.log(studente);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studente) {

    console.log(studente[key]);
    //console.log(studente);
    //console.log(key);
    tag.innerHTML += key + " = " + studente[key] + "<br>";
}

//Creare un array di oggetti di studenti

var studenti = [

    {
        nome : "Paola",
        cognome : "Cortellesi",
        eta : 32
    },
    {
        nome : "Valerio",
        cognome : "Mastandrea",
        eta : 25
    },
    {
        nome : "Edoardo",
        cognome : "Leo",
        eta : 27
    },
    {
        nome : "Anna",
        cognome : "Foglietta",
        eta : 30
    },
    {
        nome : "Marco",
        cognome : "Giallini",
        eta : 21
    }
];

console.log(studenti);

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    
    //singoli oggitti ad ogni iterazione
    //console.log(studenti[i]);
    console.log(studenti[i].nome, studenti[i].cognome);
    //console.log(studenti[i].cognome);

    tag2.innerHTML += studenti[i].nome + " " + studenti[i].cognome + "<br>";
}


//Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.