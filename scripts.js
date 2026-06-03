const convertButton = document.querySelector('.convert-button')
const currencySelect1 = document.querySelector('.currency-select1')
const currencySelect2 = document.querySelector('.currency-select2')
const inputCurrency = document.querySelector('.input-currency')
const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
const currencyValueConverted = document.querySelector('.currency-value')

const currencyData = {
  real:  { name: 'Real Brasileiro',   img: './assets/Real.png',   code: 'BRL' },
  dolar: { name: 'Dólar Americano',   img: './assets/Dólar.png',  code: 'USD' },
  euro:  { name: 'Euro',              img: './assets/Euro.png',   code: 'EUR' },
  libra: { name: 'Libra Esterlina',   img: './assets/Libra.png',  code: 'GBP' }
}

// ─────────────────────────────────────────────
//  BUSCA A COTAÇÃO NA API (Open Access, sem chave)
// ─────────────────────────────────────────────
const fetchRate = async (codeFrom, codeTo) => {
  // Busca todas as cotações tendo codeFrom como base
  const response = await fetch(
    `https://open.er-api.com/v6/latest/${codeFrom}`
  )

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`)
  }

  const data = await response.json()

  if (data.result !== 'success') {
    throw new Error('A API retornou um resultado inesperado.')
  }

  // data.rates é um objeto com todas as moedas, ex: { USD: 0.19, EUR: 0.17, ... }
  return data.rates[codeTo]
}

// ─────────────────────────────────────────────
//  CONVERSÃO PRINCIPAL
// ─────────────────────────────────────────────
const convertValues = async () => {
  const inputCurrencyValue = Number(inputCurrency.value)

  if (!inputCurrencyValue) return

  if (inputCurrencyValue <= 0) {
    alert('Por favor, digite um valor válido maior que zero.')
    return
  }

  const currencyFrom = currencySelect1.value
  const currencyTo   = currencySelect2.value

  if (currencyFrom === currencyTo) {
    alert('Por favor, escolha moedas diferentes para a conversão.')
    return
  }

  const codeFrom = currencyData[currencyFrom].code
  const codeTo   = currencyData[currencyTo].code

  // Feedback visual: desabilita botão enquanto busca
  convertButton.disabled = true
  convertButton.textContent = 'Buscando...'

  try {
    const rate = await fetchRate(codeFrom, codeTo)
    const convertedValue = inputCurrencyValue * rate

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: codeFrom
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: codeTo
    }).format(convertedValue)

  } catch (error) {
    alert('Não foi possível buscar a cotação. Verifique sua conexão e tente novamente.')
    console.error('Erro ao buscar cotação:', error)

  } finally {
    // Sempre restaura o botão, deu erro ou não
    convertButton.disabled = false
    convertButton.textContent = 'Converter'
  }
}

// ─────────────────────────────────────────────
//  ATUALIZA MOEDA DE DESTINO (select 2)
// ─────────────────────────────────────────────
const changeCurrency = () => {
  const currencyName  = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  const data = currencyData[currencySelect2.value]
  currencyName.innerHTML  = data.name
  currencyImage.src        = data.img

  convertValues()
}

// ─────────────────────────────────────────────
//  ATUALIZA MOEDA DE ORIGEM (select 1)
// ─────────────────────────────────────────────
const changeCurrencyFrom = () => {
  const currencyNameFrom  = document.getElementById('currency')
  const currencyImageFrom = document.querySelector('.currency-img-from')

  const data = currencyData[currencySelect1.value]
  currencyNameFrom.innerHTML  = data.name
  currencyImageFrom.src        = data.img

  convertValues()
}

// ─────────────────────────────────────────────
//  DESABILITA BOTÃO SE AS MOEDAS FOREM IGUAIS
// ─────────────────────────────────────────────
const checkCurrencyEquality = () => {
  convertButton.disabled = (currencySelect1.value === currencySelect2.value)
}

// ─────────────────────────────────────────────
//  EVENT LISTENERS
// ─────────────────────────────────────────────
currencySelect1.addEventListener('change', () => {
  changeCurrencyFrom()
  checkCurrencyEquality()
})

currencySelect2.addEventListener('change', () => {
  changeCurrency()
  checkCurrencyEquality()
})

convertButton.addEventListener('click', convertValues)

inputCurrency.addEventListener('keydown', event => {
  if (event.key === 'Enter') convertValues()
})

// ─────────────────────────────────────────────
//  INICIALIZAÇÃO
// ─────────────────────────────────────────────
window.addEventListener('load', () => {
  changeCurrencyFrom()
  changeCurrency()
  checkCurrencyEquality()
})