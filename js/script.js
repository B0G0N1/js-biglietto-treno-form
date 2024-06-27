function price_calc() {
    // Prezzo per chilometro
    const km_price = 0.21;

    // Prendi i valori degli input
    let nome = document.getElementById('name').value;
    let chilometri = document.getElementById('distance').value;
    let age = document.getElementById('age').value;

    // Verifica se tutti i campi sono pieni
    if (!nome || !chilometri || !age) {
        alert("Per favore, riempi tutti i campi.");
        return; // Interrompe l'esecuzione della funzione
    }

    // Calcola il prezzo base del biglietto e inizializza sconto
    let prezzoBase = chilometri * km_price;
    let discount = 0;

    // Applica lo sconto in base all'età
    if (age === 'minorenne') {
        discount = 0.2; // Sconto del 20% per i minorenni
    }
    else if (age === 'over65') {
        discount = 0.4; // Sconto del 40% per gli over 65
    }

    // Calcola il prezzo finale applicando lo sconto
    let prezzoFinale = prezzoBase - (prezzoBase * discount);

    // Mostra il riepilogo dei dati e l'output del prezzo finale
    document.getElementById('output_name').innerText = nome;
    document.getElementById('output_offer').innerText = 'Biglietto Standard';
    document.getElementById('output_carriage').innerText = '5';
    document.getElementById('output_cp').innerText = '92911';
    document.getElementById('output_price').innerText = prezzoFinale.toFixed(2) + '€';
}

function reset_form() {
    // Svuota tutti i campi
    document.getElementById('name').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('age').value = 'minorenne';

    // Svuota i campi del riepilogo
    document.getElementById('output_name').innerHTML = '&nbsp;';
    document.getElementById('output_offer').innerHTML = '&nbsp;';
    document.getElementById('output_carriage').innerHTML = '&nbsp;';
    document.getElementById('output_cp').innerHTML = '&nbsp;';
    document.getElementById('output_price').innerHTML = '&nbsp;';
}