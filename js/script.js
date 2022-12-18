/*
Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma
*/


//creo una funzione che girir la parola e tramite un flag vedere se è ugale a prima per verificare che sia un palindromo

function palindrome (word){
   
    let reversWord = '';
    for(let i = word.length - 1; i >= 0; i-- ){
       const letter = word[i];
        reversWord += letter;
    }
    
    return reversWord;
}
// chiedo all'utente di inserire una parola tramite un form

const form = document.getElementById('form');
const userElement = document.getElementById('user-word');
const target = document.getElementById('target');

form.addEventListener ('submit', function(e){
    e.preventDefault();

    userWord = userElement.value.trim()
    palindrome(userWord);
    
    if(userWord === reversWord){
        target.innerText = `La parola: ${userWord} è un palindromo`
    }else{
        target.innerText = `La parola: ${userWord} non è un palindromo` 
    }
});





