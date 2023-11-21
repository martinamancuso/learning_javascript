/*
Crea una template string che genera un messaggio di saluto 
con un nome e un messaggio personalizzato.
*/

const name1 = "John";
const message = "Welcome to our website!";

const greeting = `${name1 + ' ' + message}`;
console.log(greeting);