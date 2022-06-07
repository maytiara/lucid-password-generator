// Alert the user about your page
function windowsAlert () {
  window.alert ('Welcome to myspace, a rookie of Javascript. Enjoy!');
  window.alert ('Please, Follow the prompt!' + "\n" + "\n" + 'Step 1: Click GENERATE PASSWORD button');
  windowsAlert.preventDefault;
  return windowsAlert;
}

const confirmNumber = 'numbers';
const confirmSymbols = 'symbols';
const confirmLetters = 'letters';

//Additional values
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// For letters (values) Change lowercase to Uppercase 
const upperCase = letters.map(element => {
  return element.toUpperCase();
});

const generateBtn = document.getElementById("generate");


generateBtn.addEventListener('click', function() {
  ps = generatePassword ();
  document.getElementById('generate').placeholder = ps;

});


function generatePassword () {
  const passwordLength = '';

  passwordLength = parseInt(prompt('Step 2: Enter the password length' + "\n" + "\n" + 'Please select a number between 8 - 128', '8-128'));
  if (!passwordLength) {
    alert ('This needs a value');
  }
  if (passwordLength >=8 && passwordLength <=128) {
    //break;
    // Else, return this alert and loop back to the start so they can choose a valid number
  passwordLength = parseInt (alert('Error! Please select a number between 8 - 128'));
  } 
  
  confirmSymbols = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include symbols [$/@[!..]');
  confirmNumber = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include numbers [0123..]');
  confirmLetters = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include a set of letters [abcdABCD..]');
  
  if (!confirmSymbols && !confirmNumber && !confirmLetters) {
  choices = alert("You must choose a criteria!");


  const ps = password.join("");
  UserInput(ps);
  return ps;
}}


  const passwordArray = []
  if (symbols) 
    passwordArray.concat(symbols)
  if (numbers) 
    passwordArray.concat(numbers)
  if (letters) 
    passwordArray.concat(letters)
  else if (!symbols && !numbers && !letters)
    alert('You must select at least one criteria, please start again!' + "\n" + "\n" + 'GO BACK to Step 1: Click GENERATE PASSWORD button');
  
  console.log (passwordArray);

  const password = (passwordLength, passwordArray) => {
    let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += passwordArray.charAt(Math.floor(Math.random() * passwordArray.length));
  }
  return password;
}


function writePassword() {
  const confirmPrompts = confirmToGo();
  const passwordText = document.getElementById("password").placeholder = writePassword;

  if (confirmPrompts) {
      const newPassword = generatePassword ();
      passwordText.value = newPassword;
  } else {
    passwordText.value ='';
  }
}


// Initial Plan: 

// On my homepage there's an alert (Welcome to myspace....) -Check
// Another alert (to click the Generate window) -Check

// User will click the Generate Button -Check
// Prompt > Step 2: Enter the password length - Check
// if OK! > Confirm to ff criteria
// if input outside 8 - 128 > alert > error message > Ok
// Return > to Step 2:
// Once, the user select the requirement/s they need > Generate a password > inside the placeholder


//Values for prompt




// Assignment Code





//  function generatePassword () {
//    for (const i = 0; i < passwordLength; i++) {
//      const randomPassword = Math.floor(Math.random() * passwordArray.length);
//      randomPassword += passwordArray(randomPassword, randomPassword + 1);
//    }
//    const generateBtn = document.getElementById ("generate").placeholder = password;
//    generateBtn.addEventListener ('click', writePassword);
//    console.log (password)
//    return  randomPassword;
//  }


// Upon clicking the Generate Password, a confirm message '' by answering 'OK' to continue 'Cancel' to prevent from going on the next step
//const generateBtn = document.getElementById("generate"); 

// A prompt message to enter the answer between 8 - 128, if the user select "Cancel" it will alert an error message and have to enter the right digit/s; if "OK" it prompt the user to enter the correct digit/s.
//  function password () {
//  
//  const passwordLength = passwordLength ;
//    while (true) {
//      const passwordLength = prompt ('Step 2: Enter the password length' + "\n" + "\n" + 'Please select a number between 8 - 128', '8-128');
//      if (passwordLength >=8 && passwordLength <=128) {
//        break;
//      } alert ('Error!' + "\n" + "\n" + 'Only select a number between 8 - 128');
//    }
//    //After the user select a number between 8 - 128, multiple confirm message will have to answer by the user using (Ok = to include on the selection criteria) (Cancel="Not to include on the selection criteria")
//    symbols = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include symbols [$/@[!..]');
//    numbers = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include numbers [0123..]');
//    letters = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include a set of letters [abcdABCD..]');
//  
//    const passwordArray = []
//    if (symbols) 
//      passwordArray.concat(symbols)
//    if (numbers) 
//      passwordArray.concat(numbers)
//    if (letters) 
//      passwordArray.concat(letters)
//    else if (!symbols && !numbers && !letters)
//      alert('You must select at least one criteria, please start again!' + "\n" + "\n" + 'GO BACK to Step 1: Click GENERATE PASSWORD button');
//    
//    console.log (passwordArray);
//  
//    const password = (passwordLength, passwordArray) => {
//      let randomPassword = "";
//    for (let i = 0; i < passwordLength; i++) {
//      randomPassword += passwordArray.charAt(Math.floor(Math.random() * passwordArray.length));
//    }
//    return password;
//   }