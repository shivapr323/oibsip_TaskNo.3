const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("faranheit");
const cButtton = document.querySelector("button");
cButtton.addEventListener("click", tconv);
function tconv() {
  if (celcius.value !== "") {
    const cTemp = parseFloat(celcius.value);
    const ftemp = cTemp * (9 / 5) + 32;
    fahrenheit.value = ftemp.toFixed(2);
  } else if (fahrenheit.value !== "") {
    const ftemp = parseFloat(fahrenheit.value);
    const ctemp = (ftemp - 32) * (5 / 9);
    celcius.value = ctemp.toFixed(2);
  }
}
