function calcolaPrezzo() {
    let prezzoPerKm = 0.21;

    let chilometri = document.getElementById('kilometri').value;
    let eta = document.getElementById('eta').value;

    let prezzoBase = chilometri * prezzoPerKm;
    let sconto = 0;

    if (eta < 18) {
        sconto = 0.2;
    } else if (eta > 65) {
        sconto = 0.4;
    }

    let prezzoFinale = prezzoBase - (prezzoBase * sconto);

    console.log("Prezzo finale del biglietto: €" + prezzoFinale.toFixed(2));
}
