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
async function main(){
    await sleep(2000);
    changeblocks();
}
main();

