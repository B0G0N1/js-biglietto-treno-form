<!----------------------
    CONSEGNA ESERCIIO
----------------------->
Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Link repo live coding: https://github.com/fabriziom90/js-html-css.git
Buon lavoro (modificato)




<!----------------------
    PSEUDO-CODICE
----------------------->
1. Inizializza il programma
2. Definisci una costante per il costo al chilometro (0.21 €)
3. Richiedi all'utente il numero di chilometri da percorrere
4. Salva il numero di chilometri in una variabile
5. Richiedi all'utente l'età del passeggero
6. Salva l'età del passeggero in una variabile
7. Calcola il prezzo base del biglietto moltiplicando i chilometri per il costo al chilometro
8. Se l'età del passeggero è inferiore a 18 anni:
    1. Calcola lo sconto del 20% sul prezzo base
    2. Sottrai lo sconto dal prezzo base
9. Altrimenti, se l'età del passeggero è maggiore o uguale a 65 anni:
    1. Calcola lo sconto del 40% sul prezzo base
    2. Sottrai lo sconto dal prezzo base
10. Mostra all'utente il prezzo totale del biglietto