

// Utilizza la funzione e stampa il risultato

let arrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sommaNumeri(arrayy)




// Funzione Addizione Array
function sommaNumeri(numeri, somma=0) {

    for (let i = 0; i < numeri.length; i++) {
        somma += numeri[i];
    }

    console.log(somma);
}

