const USD = 5.42
const EUR = 6.43
const GBP = 7.30


const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")

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
   
}
