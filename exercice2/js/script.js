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

//creo una funzione per per stabilire se la somma dei numeri e pari o dispari

function isEven(number){
    let result = number % 2 === 0 ? true : false;

    return result;
}

;



form.addEventListener('submit', function(e){
    e.preventDefault();

    //prendo i volori del utente 
    const userNumber = parseInt(numberElement.value.trim())
    const userChoice = userSelect.value
    console.log(userChoice)
    
    if(userNumber > 5 || !userNumber){
        alert('devi inserire un numero  minore o uguale a 5')
        return
    }

    if(userNumber < 1  || !userNumber){
        alert('devi inserire un numero da maggiore o uguale a 1')
        return
    }
    //console.log(userNumber, userChoice)
    //genero un numero random per la cpu
    const cpuNumber = getRandomNumber()
    console.log(cpuNumber)
    //sommo il numero della cpu con quello dell'utente
    const result = isEven(userNumber + cpuNumber)
    //verifico se il risultato e pari o dispari
    console.log(result);
    
    

    if(!result && userChoice === 'shots'){
        target.innerText = `congratulazioni e uscito dispari hai vinto tu`
    } else if(result && userChoice === 'even'){
        target.innerText = `congratulazioni e uscito pari hai vinto tu`
    } else{
        target.innerText = `ha vinto la cpu`
    }
});