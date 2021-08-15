function removeMain() {
    document.getElementById('main').remove();
}
removeMain();

const newHeader = document.createElement("h1");
function addH1() {
    newHeader.id = "victory";
    newHeader.innerHTML = "<h1 id = 'victory'> Kat is the champion</h1>"
}
addH1();