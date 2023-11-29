/*
Dato uno 'studente' oggetto nidificato, con informazioni sulle proprietà e voti, 
utilizza la destrutturazione dell'oggetto per creare variabili 
'nome', 'età' e 'voto' che contengano i valori dell'oggetto nidificato.
*/

const student = {
  info: { firstName: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

const {info: {firstName, age}, grades} = student;
console.log(firstName);
console.log(age);
console.log(grades);