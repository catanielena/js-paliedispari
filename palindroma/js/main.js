function isPalindrom(string) {
    var lowstring = string.toLowerCase();
    var len = string.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (lowstring[i] !== lowstring[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// // user input

// btn send
var btn = document.getElementById("send");

btn.addEventListener("click",
function() {
        var userWord = document.getElementById("word").value;
        console.log(isPalindrom(userWord));
        if (isPalindrom(userWord) == true) {
            document.getElementById("word").style.backgroundColor = "green";
        } else {
            document.getElementById("word").style.backgroundColor = "red";
        }
        document.getElementById("word").style.color = "white";
    }
);
