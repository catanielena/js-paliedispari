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
            document.getElementById("user-number").classList.add("hide");
            document.getElementById("pari-dispari").classList.add("hide");
            // input  nascosti
            document.getElementById("invia").classList.add("hide");
            // mostra scelte
            document.getElementById("chosen-number").classList.add("open");
            document.getElementById("chosen-option").classList.add("open");
            document.getElementById("chosen-number").innerHTML = userNumber;
            document.getElementById("chosen-option").innerHTML = userChoise;
            // mostra wrapper__bottom
            document.getElementById("bottom").classList.add("flex");
        } else {
            alert("Errore! Inserisci un numero da 1 a 5")
        }
    }

);

btnRitenta.addEventListener ("click",
    function() {
        // refresh numero
        document.getElementById("user-number").value = ""; 
        // mostra btn-invia
        document.getElementById("invia").classList.remove("hide");
        // nascondi bottom
        document.getElementById("bottom").classList.remove("flex");
        // nascondi scelte
        document.getElementById("chosen-number").classList.remove("open");
        document.getElementById("chosen-option").classList.remove("open");
        // mostra input/select
        document.getElementById("user-number").classList.remove("hide");
        document.getElementById("pari-dispari").classList.remove("hide");
    }
    
);