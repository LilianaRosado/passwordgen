// Assignment code here

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


//prompt length (more than 8 less than 128)
//prompt char types to include (lowercase, uppercase, numeric, special numbers)
var passwordEl = document.getElementById('password');
var lengthEl;

let length = prompt('Length of Password');
length = +lengthEl;

console.log(typeof length)


//Getting random lower case letters using https://net-comber.com/charset.html
function randLow(){
return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}

function randUpr(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
  }

function randNum(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
    }

function randSym(){
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
      }

const randomFunc = {
  lower: randLow,
  upper: randUpr,
  number: randNum,
  symbol: randSym
}

