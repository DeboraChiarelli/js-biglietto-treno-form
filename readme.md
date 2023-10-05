Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
La differenza è che i dati dell’utente li prenderemo da degli input, e calcoleremo il prezzo quando l’utente clicca su un pulsante ‘calcola’
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente un input (dove l’utente inserirà il numero di km), una select (con cui l’utente potrà scegliere il tipo di sconto da applicare) e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
Inizialmente la risposta finale (o output) sarà da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Aggiungete anche un input per inserire il nome del passeggero. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

# Calcolo del prezzo del biglietto del treno

- Insersco input nell'HTML:
    - recupero il numero dei km inseriti dall'utente nel campo input:
        - seleziono l'elemento input tramite ID
        - recupero il valore presente nell'input e lo salvo in una variabile
    - recupero l'età del passeggero inserita dall'utente nel campo input:
        - seleziono l'elemento input tramite ID
        - recupero il valore presente nell'input e lo salvo in una variabile
- Inserisco bottone nell'HTML
- Inserisco select nell'HTML
- Recupero select dal DOM
- Aggiungo addEventListener
- Definisco prezzo per chilometro:
  - assegno alla variabile un valore
- Assegno alla variabile per lo sconto da appliccare ai minorenni un valore:
- Assegno alla variabile per lo sconto da applicare agli over 65 un valore:
- Calcolo il prezzo pieno del biglietto
- calcolo lo sconto del 20% per i minorenni
- calcolo lo sconto del 40% per gli over 65
- Calcolo il prezzo finale del viaggio:
  - Applico sconto del 20% per gli under 18:
      - SE il passeggero sarà minorenne
        - applicherò lo sconto per gli Under18
      - SE il passeggero sarà over 65
        - applicherò lo sconto per gli Over65
      - SE il passeggero è tra i 18 e i 65 anni

- Formatto il prezzo con massimo due decimali
- Stampo in pagina dati e output del prezzo finale:
    - inserisco nell'html un tag h1 con l'id scelto
    - recupero con js l'elemento del DOM con l'id scelto
    - modifico l'innerHTML dell'h1 con il valore della variabile dell'id scelto