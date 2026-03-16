
const convertButton = document.querySelector('.convert-button') 
const currencySelect2 = document.querySelector('.currency-select2') 

function convertValues() { 
    const inputCurrencyValue = document.querySelector('.input-currency').value 
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') 
    const currencyValueConverted = document.querySelector('.currency-value') 

    const dolarToday = 5.21 
    const euroToday = 6.05 
    const libraToday = 7 
    
    currencyValueToConvert.innerHTML =  new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(inputCurrencyValue)

    if (currencySelect2.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect2.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(inputCurrencyValue / euroToday) 
    }

    if (currencySelect2.value == 'libra') { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', { 
            style: 'currency', 
            currency: 'GBP' 
        }).format(inputCurrencyValue / libraToday) 
    }

}
function changeCurrency() { 
    const currencyName = document.getElementById('currency-name') 
    const currencyImage = document.querySelector('.currency-img') 

    if (currencySelect2.value == 'dolar') { 
        currencyName.innerHTML = 'Dolar Americano' 
        currencyImage.src = './assets/Dólar.png' 
    }
    if (currencySelect2.value == 'euro') { 
        currencyName.innerHTML = 'Euro' 
        currencyImage.src = './assets/Euro.png' 
    }
    if (currencySelect2.value == 'libra') { 
        currencyName.innerHTML = 'Libra Esterlina' 
        currencyImage.src = './assets/Libra.png' 
    }
    
    convertValues() 

}
currencySelect2.addEventListener('change', changeCurrency) 
convertButton.addEventListener('click', convertValues)

