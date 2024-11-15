let temperatureCelsius = prompt("Veuillez indiquer votre temperature en degres celsius")
temperatureCelsius = Number(temperatureCelsius)
let temperatureKelvin = 275.15 + temperatureCelsius

console.log(`A temperature de ${temperatureCelsius}° Celsius vaut ${temperatureKelvin} en Kelvin`);
