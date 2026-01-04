// Cotação das moedas
const USD = 5.42
const EUR = 6.43
const GBP = 7.30

// Obtendo os elementos do DOM
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()   
    
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        default:
            alert("Moeda não suportada.")
    }
}


//Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
   try {
    // atualiza o texto do description com o resultado da conversão
    description.textContent = `${symbol}1 = R$ ${formatCurrencyBRL(price)}`
    
    // aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result")
   } catch (error) {
   //remove a classe que exibe o footer com o resultado
    footer.classList.remove("show-result")
       
    console.log(error)
    alert("Ocorreu um erro ao converter a moeda. Tente novamente mais tarde.")
   }
}

// Formata a moeda em Real Brasileiro (BRL).
function formatCurrencyBRL(value) {
    // Converte o valor para o formato de moeda BRL usando o toLocaleString.
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}