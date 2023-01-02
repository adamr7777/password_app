

const formEl = document.getElementById('form-el');
const passLengthEl = document.getElementById('length');
const numCheckEl = document.getElementById('num-check');



//max pass length - 24


formEl.addEventListener('submit', getPass);



function getPass(event) {
    event.preventDefault();
    let password = '';
    let passwordLen = passLengthEl.value;
    const data = makeData();
    //making the 1 array of 2
    if (numCheckEl.checked) {
        passwordLen = passwordLen - 1;
        for (let element of data.numbers) {
            data.abc.push(element)
    }}
    // console.log(data);
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
    const numbers = '0123456789'
    return {
        abc: Array.from(alphabet),
        numbers: Array.from(numbers)
    }
}