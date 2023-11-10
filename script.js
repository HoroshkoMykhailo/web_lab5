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
}
function calculateParallelogramArea(base, height) {
    return base * height;
}
async function main(){
    await sleep(2000);
    changeblocks();
    var baseLength = 10;
    var heightLength = 5;
    var area = calculateParallelogramArea(baseLength, heightLength);
    var block = document.querySelector('.block5');
    block.innerHTML += "<p>Area of parallelogram is: " + area + "</p>";
}
main();

