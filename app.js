

const formEl = document.getElementById('form-el');





formEl.addEventListener('submit', function(event) {
    getPass(event, 8);
})




function getPass(event, passLength) {
    event.preventDefault();
    let password = '';
    const abcArray = makeAbcData();
     
    for (let i=0; i<passLength; i++) {
        const rNum = Math.floor(Math.random() * 26); //26 letters, interv 0 - 25
        const rChar = abcArray[rNum];
        password += rChar;
        //console.log(rChar);
    }
    //console.log(password);
    formEl.children[1].value = password;
}



function makeAbcData() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from(String(alphabet));
   
}