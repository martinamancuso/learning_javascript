/* 
In questo esercizio dato un array di studenti:
- Utilizza forEach per stampare i nomi degli studenti.
- Utilizza find per trovare uno studente con un voto superiore a 90.
- Utilizza reduce per calcolare la media dei voti degli studenti.
- Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
- Utilizza filter per trovare gli studenti con voti superiori a 85.
*/

const students = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

students.forEach(student => console.log(student.nome));

const vote = students.find(student => student.voto > 90); // { nome: 'Alice', voto: 95 }

const sum = students.reduce((accumulator, student) => accumulator + student.voto, 0);
const average = sum / students.length; // 87

const upperCase = students.map(student => student.nome.toUpperCase()); // [ 'ALICE', 'BOB', 'CAROL', 'DAVID', 'EVE' ]

const voteGreaterThan85 = students.filter(student => student.voto > 85); // [ { nome: 'Alice', voto: 95 }, { nome: 'Bob', voto: 88 }, { nome: 'David', voto: 92 } ]