let sceltaPariODispari = prompt("Scegliere tra \n\n1 - Pari \n2 - Dispari");

let numberChoice = parseInt(prompt("Scrivi un numero da 1 a 5?"));





console.log("Hai scelto il numero : " + numberChoice);




giocoPariODispari() 




function giocoPariODispari() {


    if (sceltaPariODispari == "Pari" || sceltaPariODispari == "pari" || sceltaPariODispari == "1") {
        sceltaPariODispari = "Pari"
    } else if (sceltaPariODispari == "Dispari" || sceltaPariODispari == "dispari" || sceltaPariODispari == "2"){
        sceltaPariODispari = "Dispari"
    } else {
        alert("Scelta sbagliata")
    }

    console.log("Hai scelto : " + sceltaPariODispari);

    PCrandomNumber = Math.floor(Math.random() * 6);

    parseInt(alert("Il numero random scelto dal Computer è " + PCrandomNumber + "\n\n "))

    SommaNumber = numberChoice + PCrandomNumber;

    if (sceltaPariODispari == "Pari" && SommaNumber % 2 == 0 || sceltaPariODispari == "Dispari" && SommaNumber % 2 != 0) {
        alert("Utente ha Vinto");
    } else {
        alert("Il PC ha vinto, mi dispiace.")
    }

    return sceltaPariODispari;
}
