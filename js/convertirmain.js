function convertirFahrenheit(){
var celsius=Number (document.getElementById("idCelsius").value);
document.getElementById("IdCajaFarenheit").value = ((9 * celsius / 5) + 32);
alert(document.getElementById("IdCajaFarenheit").value);
}


function Kelvin(){
  var celsius= Number(document.getElementById("idCelsius").value);
  document.getElementById("idCajaKelvin").value = celsius + 273;
  alert(document.getElementById("idCajaKelvin").value);
}
