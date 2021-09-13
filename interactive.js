const celciusInput = document.querySelector('#celcius > Input');
const fahrenheitInput = document.querySelector('#fahrenheit>Input');
const kelvinInput = document.querySelector('#kelvin>Input');


// NOTE:ROUNDING NUMBER TO THE NEAREST 100TH PLACE 

function roundNum(num) {
    return Math.round(num * 100) / 100;
}



// NOTE: cTemp = celcius temperature ; fTemp = fahrenheit temperature and kTemp = kelvin temperature.

function celciusToFahrenheitAndKelvin() {

    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheinTocelciusAndKelvin() {

    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
    // kelvinInput.value = kTemp;
}

function kelvinToCelciusAndFahrenheit() {

    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);

}


function main() {

    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheinTocelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);

}

main();