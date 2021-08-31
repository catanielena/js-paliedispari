// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function isEven (num1) {
    if (num1 % 2) {
        return true;
    }
    return false;
}

// btn-invia
var btnInvia = document.getElementById("invia");
// btn-ritenta
var btnRitenta = document.getElementById("ritenta");

btnInvia.addEventListener("click",
function() {
    // user-number
    var userNumber = document.getElementById("user-number").value; 
    // user-choise
    var userChoise = document.getElementById("pari-dispari").value;
    // verifica
    if( userNumber>0 && userNumber<6 && !(isNaN(userNumber))) {
            // cpu-number
            var cpuNumber = getRandomNumber(1, 5);
            // somma
            var sum = userNumber + cpuNumber;
            // messaggio
            var message = "";
            if (isEven(sum) && userChoise =="pari") {
                message = "Congratulazioni! Hai vinto";
            } else if (isEven(sum) ==false && userChoise =="dispari") {
                message = "Congratulazioni! Hai vinto";
            } else {
                message = "Hai perso! Ritenta";
            }
            // stampa risultati
            document.getElementById("risultato").innerHTML = message;
            document.getElementById("cpu-number").innerHTML = cpuNumber;
            // bottone invia nascosto
            document.getElementById("invia").classList.add("hide");
            // mostra wrapper__bottom
            document.getElementById("bottom").classList.add("open");
        } else {
            alert("Errore! Inserisci un numero da 1 a 5")
        }
    }

);

btnRitenta.addEventListener ("click",
    function() {
        document.getElementById("user-number").value = ""; 
        document.getElementById("invia").classList.remove("hide");
        document.getElementById("bottom").classList.remove("open");
    }
    
);