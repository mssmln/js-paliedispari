// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//*********versione semplificata**********

// declare vars
var choice = prompt('key in even or odd please');
console.log(choice);
var number = parseInt(prompt('choose from 1 to 5 please') );
console.log('user', number);
var pcNumber = randomNumber(1, 5);
console.log('pc', pcNumber);


// sum numbers
var sum = number + pcNumber;
console.log('sum', sum);


// dice se è pari o dispari, sum corrisponde alla var
if (evenOdd(sum)) {
  console.log('pari', sum);
} else {
  console.log('dispari', sum);
}



// who is the winner?
if (number > pcNumber) {
  console.log('the winner is user');
} else if (number < pcNumber) {
  console.log('the winner is pc');
} else {
  console.log('equality, try again');
}



// genera un numero compreso tra il min e il max entrambi inclusi
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// stabilisce se è pari o dispari
function evenOdd(result) {
  if (result % 2 == 0) {
    return true;
  }
  return false;
}



// ********versione più avanzata********
// var i = 0;
//
// do {
//   var choice = prompt('key in even or odd');
//   console.log(choice);
//   i++;
//
// } while (i);
