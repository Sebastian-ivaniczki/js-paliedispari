/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//prendo gli elementi in pagina

const form = document.getElementById('form');
const userSelect = document.getElementById('user-select');
const numberElement = document.getElementById('user-number');
const target = document.getElementById('target');

//creo una funzione per genereare un numero random per la cpu

function getRandomNumber(number){
    const randomNumber = Math.floor(Math.random() * 5) +1;
    return randomNumber;
}

const cpuNumber = getRandomNumber()

console.log(cpuNumber)

//creo una funzione per per stabilire se la somma dei numeri e pari o dispari

function isEven(number){
    let result = false

    if(number % 2 === 0){
        result = true
    }
    return result;
}