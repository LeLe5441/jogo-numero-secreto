

function verificaChuteValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>';
        return;
    }

    if (NumeroMaiorOuMenorValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}. Tente novamente</div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <div class="div"><i class="fa-solid fa-check fa-beat"></i></div>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
            <div class="div"><i class="fa-solid fa-xmark fa-beat" style="color: #2e64c2;"></i></i>
        `;
       
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
            <div class="div"><i class="fa-solid fa-xmark fa-beat" style="color: #2e64c2;"></i></div>
        `;
        
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function NumeroMaiorOuMenorValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
});


