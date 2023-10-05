//- Inserisco bottone nell'HTML
//    - seleziono l'elemento input tramite ID
//    - recupero il valore presente nell'input e lo salvo in una variabile
const buttonDomElement = document.getElementById('price-calc');
console.log(buttonDomElement);
//- Insersco input nell'HTML:
//- recupero il numero dei km inseriti dall'utente nel campo input:
//    - seleziono l'elemento input tramite ID
//    - recupero il valore presente nell'input e lo salvo in una variabile
const inputDomElement = document.getElementById('distanceKm');
console.log(inputDomElement);
//- recupero l'età del passeggero inserita dall'utente nel campo input:
//    - seleziono l'elemento input tramite ID
//    - recupero il valore presente nell'input e lo salvo in una variabile
const inputDomElement2 = document.getElementById('age');
console.log(inputDomElement2);
//- Inserisco select nell'HTML
//- Recupero select dal DOM
let selectDomElement = document.getElementById('sale');
console.log(selectDomElement.value);
//- Aggiungo addEventListener
buttonDomElement.addEventListener('click', function(){
    //- recupero dall'input il valore dell'attributo value
    const km = parseFloat(inputDomElement.value);
    console.log(km);
  //- recupero dall'input il valore dell'attributo value
    const age = parseFloat(inputDomElement2.value);
    console.log(age);
    //- Definire prezzo per chilometro:
    //  - assegnare alla variabile un valore
        const payForKm = 0.21;
    //- Assegnare alla variabile per lo sconto da appliccare ai minorenni un valore:
      let percForUnder18 = 20;
    //- Assegnare alla variabile per lo sconto da applicare agli over 65 un valore:
      let percForOver65 = 40;
    //- Calcolare il prezzo pieno del biglietto:
      const fullPrice = km * payForKm; 
      console.log(fullPrice);
    //- calcolare lo sconto del 20% per i minorenni:
      let saleForUnder18 = (fullPrice * percForUnder18) / 100;
      console.log(saleForUnder18);
    //- calcolare lo sconto del 40% per gli over 65:
      let saleForOver65 = (fullPrice * percForOver65) / 100;
      console.log(saleForOver65);
    
    //- Calcolare il prezzo finale del viaggio:
    //let finalPrice;
    //finalPrice = km * payForKm;
    //console.log(finalPrice);
//  - Applicare sconto del 20% per gli under 18:
//      - SE il passeggero sarà minorenne
        if (age < 18) {
//      - applicherò lo sconto per gli Under18
        finalPrice = fullPrice - saleForUnder18;
        } else if (age > 65) { //- SE il passeggero sarà over 65
//      - applicherò lo sconto per gli Over65
        finalPrice = fullPrice - saleForOver65;
        } else { //- SE il passeggero è tra i 18 e i 65 anni
        finalPrice = fullPrice;
        }
    //- Aggiungere cifra con massimo due decimali
        finalPrice = finalPrice.toFixed(2);
        console.log(finalPrice);
    //- Stampare un messaggio dentro h1:
//    - inserire nell'html un tag h1 con l'id scelto
//    - recuperare con js l'elemento del dom con l'id scelto
        const ticketPriceDomElement = document.getElementById('ticketprice'); 
//    - modificare l'innerHTML dell'h1 con il valore della variabile dell'id scelto
        ticketPriceDomElement.innerHTML = finalPrice;
})

