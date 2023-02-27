function getValueComp() {
  var selectedValueComp = parseFloat(document.getElementById("comp").value);
  //console.log(selectedValueComp);
  return selectedValueComp;
}

function getValueInterval() {
  var selectedValueInterval = parseFloat(
    document.getElementById("interval").value
  );
  //console.log(selectedValueInterval);
  return selectedValueInterval;
}

function getValueDays() {
  var selectedValueDays = parseFloat(document.getElementById("days").value);
  //console.log(selectedValueDays);
  return selectedValueDays;
}

function calculate() {
  var multiply = parseFloat(
    getValueComp() * getValueDays() * getValueInterval()
  );

  var alertMsg = document.getElementById("button-span");

  if (isNaN(multiply)) {
    multiply = null;
  }
  
  document.getElementById("result").innerHTML = multiply;

  else if (multiply == null) {
    alertMsg.addEventListener('click', myFunction {
      alertMsg = "Selecione as quantidades!"
      })

    }





}
calculate();




