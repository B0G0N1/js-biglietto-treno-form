// Funzione che parte premendo sul Bottone
function price_calc() {
    // Prezzo per chilometro
    let prezzoPerKm = 0.21;

    // Prendi i valori degli input chilometri e età
    let chilometri = document.getElementById('distance').value;
    let age = document.getElementById('age').value;

    // Calcola il prezzo base del biglietto e iniziallizzo sconto
    let prezzoBase = chilometri * prezzoPerKm;
    let sconto = 0;

    // Applica lo sconto in base all'età
    if (eta < 18) {
        sconto = 0.2; // Sconto del 20% per i minorenni
    } else if (eta > 65) {
        sconto = 0.4; // Sconto del 40% per gli over 65
    }

    // Calcola il prezzo finale applicando lo sconto
    let prezzoFinale = prezzoBase - (prezzoBase * sconto);

    // Mostra il prezzo finale nella console
    console.log("Prezzo finale del biglietto: €" + prezzoFinale.toFixed(2));
}
