// // - Chiedo all'utente tramie prompt un numero e poi un altro.

// let firstNumber = prompt("Inserisci un numero");
// let secondNumber = prompt("Inserisci un altro numero");

// let bigNumber;
// let smallNumber;

// // calcolo del più grande
// if (firstNumber > secondNumber) {
//   bigNumber = firstNumber;
//   smallNumber = secondNumber;
// } else if (firstNumber < secondNumber) {
//   bigNumber = secondNumber;
//   smallNumber = firstNumber;
// } else {
//   alert("i numeri sono uguali");
// }

// // random
// let random =
//   Math.floor(Math.random() * (bigNumber - smallNumber)) + smallNumber;

// console.log(random);

// // traccia 2

// const firstWord = prompt("inserisci una parola");
// const secondWord = prompt("inserisci un'altra parola");

// let words;
// if (firstWord.length == secondWord.length) {
//   words = firstWord + " " + secondWord;
//   alert(words);
// } else if (firstWord.length > secondWord.length) {
//   alert(firstWord);
// } else {
//   alert(secondWord);
// }

// traccia 3

const container = [];
let somma = 0;

while (somma < 50) {
  let userNumber = parseInt(prompt("inserisci un numero"));
  somma += userNumber;
  container.push(userNumber);
}

console.log(container);
