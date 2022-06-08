// Alert the user about your page
function windowsAlert () {
  alert ('Welcome to myspace, a rookie of Javascript. Enjoy!');
  alert ('Please, Follow the prompt!' + "\n" + "\n" + 'Step 1: Click GENERATE PASSWORD button');
  // //windowsAlert.preventDefault;
  ////return windowsAlert;
}

//To shuffle the set of Arrays to get the getRandomValue
function getRandomValue(inputArr) {
  let rand = Math.floor(Math.random()*inputArr.length);
  return inputArr[rand];
}

//Assigned [array] values for getRandomValue 
const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// For letters (values) Change lowercase to Uppercase 
const upperCase = letters.map(element => {
  return element.toUpperCase();
});

function generatePassword () {
  let passwordLength = '';
  let charactersRequired = [];
  let charactersPossible = [];
  const userAlert = confirm ('Do you trust this page to generate a unique password for you?');
  const userLeave = confirm ('Are you sure you want to leave the page?');

  //1st Condition: Once the user click the Generate Password button
  if (!userAlert && !userLeave) {
    alert ('See you on my next module');
    return null;
  } 

  //2nd Condition: Asking the user to enter the character length
  passwordLength = parseInt(prompt('Step 2: Enter the password length' + "\n" + "\n" + 'Please select a number between 8 - 128', '8-128'));
  // check for length
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Error! Please select a number between 8 - 128');
    return null;
  }
  
  //Confirm Message: selection of criterias required to generate the password
   let confirmSymbols = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include symbols [$/@[!..]');
   let confirmNumber = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include numbers [0123..]');
   let confirmLetters = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include a set of letters [abcdABCD..]');
   
   //Condition: if the user reject all the following criterias.
   if (!confirmSymbols && !confirmNumber && !confirmLetters) {
    alert("You must choose a criteria!");
    return null;
  }

  // Once the user confirm the criterias, those are the following conditions ==> (with the help of tutor)
  // It contains two buckets (1st specific for (charactersRequired = letters, symbols, numbers [asked during the confirmation])  & 2nd (characterslength - charactersRequired))
  if(confirmSymbols) {
    charactersPossible = charactersPossible.concat(symbols);
    charactersRequired.push(getRandomValue(symbols));
  }

  if(confirmNumber) {
    charactersPossible = charactersPossible.concat(letters);
    charactersRequired.push(getRandomValue(letters));
  }

  if(confirmLetters) {
    charactersPossible = charactersPossible.concat(numbers);
    charactersRequired.push(getRandomValue(numbers));
  }

  // For loop: To generate the conditions selected by the user + the placeholder for the password
  let result = []
  for(let i = 0; i < passwordLength - charactersRequired.length ; i++) {
    let character = getRandomValue(charactersPossible);
    result.push(character);
  }
  result = result.concat(charactersRequired);

  document.getElementById ('password').value = result.join("");
  
}

// Take-away notes:
// you can add "debugger" in a certain line, to check the specific error.
// concat = to merge the specific value.
// push = to add the value.
// practice more :-)


//// Initial Plan: 
//// On my homepage there's an alert (Welcome to myspace....) -Check
//// Another alert (to click the Generate window) -Check
//// User will click the Generate Button -Check
//// Prompt > Step 2: Enter the password length - Check
//// if OK! > Confirm to ff criteria
//// if input outside 8 - 128 > alert > error message > Ok
//// Return > to Step 2:
//// Once, the user select the requirement/s they need > Generate a password > inside the placeholder

// //Don't use this one:
// //const ps = result.join("");
// //return ps;
// //const generateBtn = document.getElementById("generate");