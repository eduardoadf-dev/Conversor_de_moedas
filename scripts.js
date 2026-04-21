const convertButton = document.querySelector('.convert-button')
const currencySelect1 = document.querySelector('.currency-select1')
const currencySelect2 = document.querySelector('.currency-select2')
const inputCurrency = document.querySelector('.input-currency')
const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
const currencyValueConverted = document.querySelector('.currency-value')

const exchangeRates = {
  real: 1,
  dolar: 5.21,
  euro: 6.05,
  libra: 7
}

const currencyData = {
  real: { name: 'Real Brasileiro', img: './assets/Real.png', code: 'BRL' },
  dolar: { name: 'Dólar Americano', img: './assets/Dólar.png', code: 'USD' },
  euro: { name: 'Euro', img: './assets/Euro.png', code: 'EUR' },
  libra: { name: 'Libra Esterlina', img: './assets/Libra.png', code: 'GBP' }
}

const convertValues = () => {
  const inputCurrencyValue = Number(inputCurrency.value)

  if (!inputCurrencyValue) {
    // Se o input estiver vazio ou zero, não faz nada
    return
  }

  if (inputCurrencyValue <= 0) {
    alert('Por favor, digite um valor válido maior que zero.')
    return
  }

  const currencyFrom = currencySelect1.value
  const currencyTo = currencySelect2.value

  if (currencyFrom === currencyTo) {
    alert('Por favor, escolha moedas diferentes para a conversão.')
    return
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currencyData[currencyFrom].code
  }).format(inputCurrencyValue)

  const convertedValue = inputCurrencyValue * (exchangeRates[currencyFrom] / exchangeRates[currencyTo])

  currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currencyData[currencyTo].code
  }).format(convertedValue)
}

const changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  const data = currencyData[currencySelect2.value]
  currencyName.innerHTML = data.name
  currencyImage.src = data.img

  convertValues()
}

const changeCurrencyFrom = () => {
  const currencyNameFrom = document.getElementById('currency')
  const currencyImageFrom = document.querySelector('.currency-img-from')

  const data = currencyData[currencySelect1.value]
  currencyNameFrom.innerHTML = data.name
  currencyImageFrom.src = data.img

  convertValues()
}

currencySelect2.addEventListener('change', changeCurrency)
currencySelect1.addEventListener('change', changeCurrencyFrom)
convertButton.addEventListener('click', convertValues)
inputCurrency.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    convertValues()
  }
})

window.addEventListener('load', () => {
  changeCurrencyFrom()
  changeCurrency()
  // Não chama convertValues aqui para evitar alerta no carregamento
})