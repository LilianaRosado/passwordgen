const resultEl = document.getElementById('password');
const lengthEl = document.getElementById ('length');
const uppercaseEl = document.getElementById ('uppercase');
const lowercaseEl = document.getElementById ('lowercase');
const numbersEl = document.getElementById ('numbers');
const symbolsEl = document.getElementById ('symbols');
const generateEl = document.getElementById ('generate');

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

