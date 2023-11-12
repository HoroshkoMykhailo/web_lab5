function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function changeblocks(){
    var block3 = document.querySelector('.block3');
    var block6 = document.querySelector('.block6');
    
    if (block3 && block6) {
        var tempContent = block3.innerHTML;
        block3.innerHTML = block6.innerHTML;
        block6.innerHTML = tempContent;
    } else {
        alert('Can`t find blocks');
    }
    block3.innerHTML += '<form>' +
    '<label>' +
        '<input type="radio" name="alignment" value="left"> Align Left' + 
    '</label>' + 
    '<label>' + 
        '<input type="radio" name="alignment" value="center"> Align center' +
    '</label>' +
   '<label>' + 
        '<input type="radio" name="alignment" value="right"> Align Right' +
    '</label>' +
    '</form>';
}
function calculateParallelogramArea(base, height) {
    return base * height;
}
function ifenter(e){
    if(e.keyCode === 13){
        e.preventDefault();
    }
}
class Digits{
    constructor(){
        this.iterator = 0;
    }
    findMaxDigit(){
        var formElement = document.getElementById('numberForm');
        var inputElement = formElement.elements['number'];
        var inputValue = inputElement.value;
        var maxDigit = Math.max(...inputValue.split('').map(Number));
        document.cookie = 'maxDigit' + this.iterator + '=' + maxDigit + ';';
        this.iterator += 1;
        alert('Maximum digit: ' + maxDigit);
    }
}
function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function getCookie(){
    alert(document.cookie + "\nCookies will be deleted after you press OK.");
    deleteAllCookies();
    alert("Cookies deleted.");
}
function setAlign(block){
    RadioButton = document.querySelector('input[name="alignment"]:checked');
    if (RadioButton) {
        const alignment = document.querySelector('input[name="alignment"]:checked').value;
        block.style.textAlign = alignment;
        const blockClass = '.' +  block.classList[0];
        localStorage.setItem(`alignment_${blockClass}`, alignment);
    }
}

async function main(){
    await sleep(2000);
    changeblocks();
    var baseLength = 10;
    var heightLength = 5;
    var area = calculateParallelogramArea(baseLength, heightLength);
    var block = document.querySelector('.block5');
    block.innerHTML += "<p>Area of parallelogram is: " + area + "</p>";
    const blocksToAlign = ['.block2', '.block4', '.block5'];
    blocksToAlign.forEach(function(blockclass) {
        const block = document.querySelector(blockclass);
        alignment = localStorage.getItem(`alignment_${blockclass}`);
        if (alignment) {
            block.style.textAlign = alignment;
        }        
    });
}
const digits = new Digits();
main();

