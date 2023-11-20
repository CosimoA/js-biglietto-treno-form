/*
Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
-Età del passeggero 
-Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora finalizzeremo il layout di pagina, in cui l’utente vedrà il form stilizzato e tutto l’output stampato in pagina (il prezzo dovrà sempre essere formattato con massimo due decimali).
*/

// Variabili Preimpostate
const prezzoKm = 0.21;

const valuta = "€";

let sconto =0;

let nomeUser = "Utente deve indicare il suo Nome";
let distanzaUser = "Utente deve indicare distanza da percorrere";
let etaUser = "Utente deve indicare la sua Età";

// Trova Nome utente
const imputNome = document.querySelector(".name")

// Trova distanza km
const imputKm = document.querySelector(".distanzakm")

// Trova Età Utente
const imputEta = document.querySelector(".fasciaEta")

// Bottone Cattura Dati
const imputButton = document.getElementById("invia")


imputButton.addEventListener("click",

    function() {
        nomeUser = imputNome.value;
        console.log("Nome Utente:", nomeUser);
        distanzaUser = imputKm.value;
        console.log("Km Percorsi:", distanzaUser);
        etaUser = imputEta.value;
        console.log("Fascia Età:", etaUser);
    }
);




// // trovare prezzo totale
// const prezzoReale = distanzaUser * prezzoKm;

// // applicare sconto età
// if (imputEta === "Minorenne") {
//     sconto = ((prezzoReale * 20) / 100);
// } else if (imputEta === "Over 65") {
//     sconto = ((prezzoReale * 40) / 100);
// }




// output descrizione del prezzo
// document.getElementById("descrizione").innerHTML = ragioneSconto;

// output prezzo i € con max 2 decimali
// document.getElementById("risultato").innerHTML = valuta + (prezzoReale - sconto).toFixed(2);
