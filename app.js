

const formEl = document.getElementById('form-el');
const passLengthEl = document.getElementById('length');
const numCheckEl = document.getElementById('num-check');
const capCheckEl = document.getElementById('cap-check');
const symbolCheckEl = document.getElementById('symbol-check');


//max pass length - 24 looks like it can go higher than 20


formEl.addEventListener('submit', getPass);



function getPass(event) {
    event.preventDefault();
    let password = '';
    let passwordLen = passLengthEl.value;
    const data = makeData();
    //pushing numbers into the array
    if (numCheckEl.checked) {
        passwordLen = passwordLen - 1;
        for (let element of data.numbers) {
            data.abc.push(element);
    }}
    //pushing capitals into the array
    if(capCheckEl.checked) {
        data.capitals.forEach(function(element) {
            data.abc.push(element);
        })
    }
    //pushing special symbols into the array
    if(symbolCheckEl.checked) {
        data.symbols.forEach(function(element) {
            data.abc.push(element);
        })
    }
    // console.log(data.abc);
    for (let i=0; i<passwordLen; i++) {
        const rNum = Math.floor(Math.random() * data.abc.length); 
        const rChar = data.abc[rNum];
        password += rChar;
        //console.log(rChar);
    }
    //adding a number to the end of the password
    if (passLengthEl.value > 0 && numCheckEl.checked) {
      password += data.numbers[Math.floor(Math.random() * data.numbers.length)]; 
    }
    // console.log(passLengthEl.value);
    formEl.children[1].value = password;
    console.log();
}



function makeData() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const capitalLetters = alphabet.toUpperCase();
    const symbols = '.!@#$%^&*()_+-=';
    return {
        abc: Array.from(alphabet),
        numbers: Array.from(numbers),
        capitals: Array.from(capitalLetters),
        symbols: Array.from(symbols),
    }
}


