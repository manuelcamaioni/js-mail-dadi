//* ESERCIZIO 1

console.log(`Premi il pulsante per iniziare a giocare.`);

const buttonPlay = document.getElementById('dice-game-button');

buttonPlay.addEventListener('click', function(){
    const generatedNumPlayer = Math.floor(Math.random() * 6 + 1);
    const generatedNumPC = Math.floor(Math.random() * 6 + 1);
    console.log(`Numero uscito: ${generatedNumPlayer}`);
    console.log(`Numero del PC: ${generatedNumPC}`);

    if(generatedNumPlayer > generatedNumPC){
        console.log(`Hai vinto!`);
    } else if(generatedNumPlayer == generatedNumPC){
        console.log(`Pareggio incredibile.`);
    } else{
        console.log(`Hai perso...`);
    }
});


//* ESERCIZIO 2

//? Creare array con varie mail
//? Inserire input per controllo della mail inserita
//? Check button e creare un evento

const emailList = ['gioacchinoliberati@gmail.com', 'massimosuffragio@live.com', 'antoniabellachioma@hotmail.it'];

const checkButton = document.getElementById('email-check');


checkButton.addEventListener('click', function(){
    const inputElement = document.getElementById('email');
    let access;

    for(let i = 0; i < emailList.length; i++){

        if(inputElement.value !== emailList[i]){
            access = false;
        } else{
            access = true;
        }

        if(access == true){
        console.log('Hai effettuato l\'accesso.')
        } else {
        console.log('Non ti è permesso accedere.')
        }
    }

    
    

});



