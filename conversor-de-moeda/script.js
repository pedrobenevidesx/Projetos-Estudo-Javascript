// Cotacao de moedas.
const USD = 5.37
const EUR = 6.23
const GBP = 7.18

// Obtendo elementos do formulario
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
})

// Capturando o evento de submit do formulario.
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        
        case "EUR":
            convertCurrency(amount.value, EUR, " €")
            break
          
        case "GBP":
            convertCurrency(amount.value, GBP, "£" )
            break
    }
}

// Funcao para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotacao da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total
        let total = amount * price

        // Verifica se o resultado não é um número.
        if (isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent = `${total} Reais`

        // Aplica a classe que exite o footer para mostrar o resultado
        footer.classList.add("show-result")

    } catch (error){
        // Remove a classe do footer da tela
        footer.classList.remove("show-result")

        console.log(error)
        alert("Nao foi possivel converter. TEnte mais tarde")
    }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    // Converte para numero para utlizar o toLocaleString para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}