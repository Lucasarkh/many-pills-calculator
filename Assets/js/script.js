
function getValueComp() {
    var selectedValueComp = parseFloat(document.getElementById('comp').value);
}

function getValueInterval() {
    var selectedValueInterval = parseFloat(document.getElementById('interval').value);
}

function getValueDays() {
    var selectedValueDays = document.getElementById('days').value;
}

const resulting = getValueComp.selectedValueComp * getValueInterval.selectedValueInterval;


console.log(resulting);




