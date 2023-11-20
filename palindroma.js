let wordChoice = prompt("Inserisci una parola");
let reverseWord = reverseString(wordChoice);



//Verificare se la parola è palindroma
if (wordChoice == reverseWord) {
    alert("La parola è palindroma.");
}
else {
    alert("La parola non è palindroma.");
}



//Funzione per invertire la parola
function reverseString(str) {
    return str.split("").reverse().join("");
}

