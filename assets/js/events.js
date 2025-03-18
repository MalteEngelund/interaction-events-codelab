

/*opgave 1 plus minus*/
let myButtonValue = 0;
//feltet der vises resultat i

const myButtonResult = document.getElementById('buttonResult');
const myAddButton = document.getElementById('addButton');
const mySubButton = document.getElementById('subtractButton');


// skriv din eventhandler kode her ---------------------------------------

// Tilføj event listeners til knapperne
myAddButton.addEventListener('click', () => {
    addValue();
});

mySubButton.addEventListener('click', () => {
    subtractValue();
});




//-------------------------------------------------------------------------

// named functions du kan kalde fra eventhandlers
function subtractValue() {
 
    myButtonValue = myButtonValue - 1;

    showResult('værdi: ' + myButtonValue, myButtonResult)
}


function addValue() {
 
    myButtonValue = myButtonValue + 1;

    showResult('værdi: ' + myButtonValue, myButtonResult)
}






/* opgave 2 dice*/
const myDiceRes = document.getElementById('diceResult');
const diceButton = document.getElementById('rollDiceOne');



  
    /* disse to liner skal afvikles i en arrow funktion bundet til en eventhandler på diceButton
    let diceRoll = getRandomNumber(1, 6);
    showResult(diceRoll, myDiceRes) */

// skriv din eventhandler kode her ---------------------------------------



diceButton.addEventListener('click', () => {
    let diceRoll = getRandomNumber(1, 7); // man kan ikke rulle det højeste tal
    showResult(diceRoll, myDiceRes);
});



//-------------------------------------------------------------------------









/* opgave 3 key event */

const myLiveText = document.getElementById('myLiveText');
let myLiveTextResult = document.getElementById('tasteResult');

// skriv din eventhandler kode her ---------------------------------------

// myLiveText.addEventListener('keydown', (event) => {
//     showResult('Du tastede: ' + event.key, myLiveTextResult);
// });

myLiveText.addEventListener('input', () => {
    showResult('Du tastede: ' + myLiveText.value, myLiveTextResult);
});
//viser alt det man indtaster


//-------------------------------------------------------------------------








/* view code  DO NOT FIDDLE WIT THIS CODE*/
/* viser data i et DOM element, kræver to parametre: data til at vise og elementet det skal vises i.*/
function showResult(myData, myElement) {
    myElement.innerHTML = myData;
}


/* support functions-------------------------------------------------------------------------------*/

/* random function. skal bruge en min værdi og en max værdi.
returnerer et tilfældigt tal mellem min og max værdierne*/

function getRandomNumber(min, max) {
    let myMin = Math.ceil(min);
    let myMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

