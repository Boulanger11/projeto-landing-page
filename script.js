const botao1 = document.getElementById(`meubotao-1`)

const irParaFormulario = (event) => {
    event.preventDefault();
    document.getElementById(`meuFormulario`).scrollIntoView({behavior: `smooth`})
}

const reservar = (event) =>{
    event.preventDefault();
    const emailInput = document.getElementById(`E-mail`)
    const email = emailInput.value

    if (email.length > 0) {
        alert(`Entraremos em contato através do e-mail registrado: ${email}`)
    }else {
        alert(`Por favor, digite um e-mail valido.`)
    }
}