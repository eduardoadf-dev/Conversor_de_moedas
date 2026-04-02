# 💱 Conversor de Moedas

Conversor de moedas simples e intuitivo que permite converter valores em **Real Brasileiro (BRL)** para Dólar Americano, Euro ou Libra Esterlina.

---

🚀 Demonstração
Link do Projeto: https://eduardoadf-dev.github.io/Conversor_de_moedas/

---

## 📸 Visão Geral

A aplicação exibe o valor original em reais e o valor convertido na moeda escolhida, com formatação monetária adequada para cada país.

---

## 🚀 Funcionalidades

- Conversão de **Real Brasileiro (BRL)** para:
  - 🇺🇸 Dólar Americano (USD)
  - 🇪🇺 Euro (EUR)
  - 🇬🇧 Libra Esterlina (GBP)
- Formatação de moeda localizada (pt-BR, en-US, de-DE, en-GB)
- Atualização dinâmica da imagem e nome da moeda ao trocar a seleção
- Interface responsiva para dispositivos móveis

---

## 🗂️ Estrutura do Projeto

```
convert-money/
│
├── index.html          # Estrutura da página
├── styles.css          # Estilização visual
├── scripts.js          # Lógica de conversão
│
└── assets/
    ├── tio-patinhas.gif  # Logo animado
    ├── Real.png          # Ícone do Real
    ├── Dólar.png         # Ícone do Dólar
    ├── Euro.png          # Ícone do Euro
    ├── Libra.png         # Ícone da Libra
    └── Arrow.png         # Seta de conversão
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e responsividade |
| JavaScript (Vanilla) | Lógica de conversão e manipulação do DOM |
| Google Fonts (Roboto) | Tipografia |

---

## ⚙️ Como Usar

1. **Clone ou baixe** o repositório
2. Abra o arquivo `index.html` no navegador (não é necessário servidor)
3. Selecione a moeda de destino no campo **"Converter para"**
4. Digite o valor em reais no campo **"Valor"**
5. Clique no botão **"Converter"**
6. O resultado aparece na seção inferior com as duas moedas

---

## 💡 Como Funciona

### Conversão (`convertValues`)
Captura o valor digitado, formata o valor em BRL usando `Intl.NumberFormat` e divide pelo câmbio fixo correspondente à moeda selecionada.

### Troca de moeda (`changeCurrency`)
Ao mudar o `<select>`, atualiza o nome e a imagem da moeda de destino e já recalcula o valor convertido automaticamente.

### Taxas de câmbio utilizadas
> ⚠️ As cotações são fixas no código e não são atualizadas em tempo real.

| Moeda | Cotação (por R$1) |
|---|---|
| Dólar (USD) | R$ 5,21 |
| Euro (EUR) | R$ 6,05 |
| Libra (GBP) | R$ 7,00 |

---

## 📱 Responsividade

A aplicação se adapta a telas menores que **500px** de largura, reduzindo o container principal para 90% da tela.

---

## 🔮 Possíveis Melhorias Futuras

- Integração com uma API de câmbio em tempo real (ex: [AwesomeAPI](https://docs.awesomeapi.com.br/))
- Suporte a mais moedas
- Conversão nos dois sentidos (não só a partir do Real)
- Histórico de conversões

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais.
