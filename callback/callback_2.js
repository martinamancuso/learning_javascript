/*
Crea una funzione chiamata 'delay' che accetta come argomenti:

- una funzione di callback;
- un ritardo temporale in millisecondi.

'delay' dovrebbe eseguire la funzione di 'callback' dopo il ritardo specificato.
*/

function delay(callback, delayTime) {
  
  setTimeout(callback, delayTime);

};

function sayHi() {

  console.log("Hi, there!");

}

delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay.