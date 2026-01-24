//Aguarda o HTML carregar completamente

document.activeElement('DOMContentLoaded', () => {

    //selecionar os elementos do DOM 

    const inputSenha = document.getElementById('senha');
    const btnsubmit = document.getElementById('btnSubimit');
    const form = document.getElementById('formCadastro');

    //selecionar os itens da lista de requisitos de senha
    const reqLentgh = document.getElementById('req-lentgh')//tamanho minimo
    const reqUpper = document.getElementById('req-upper')// maiusculo
    const reqNumber = document.getElementById('req-number')//numero
    const reqSpecial = document.getElementById('req-special')//car.especial


    //função que verifica a senha a tecla digitada
    inputSenha.addEventListener('input', () => {
        const valor = inputSenha.value;

        //validar tamanho
        const hasLength = valor.length >= 8;
        alternarClasse(reqLentgh, hasLength)

        //validar letra maiuscula (regex)
        const hasUpper = /[a-z]/.test(valor);
        alternsrClasse(reqUpper, hasUpper)

        //validar numero
        const hasNumber = /[0-9]/.test(valor)
        alternarClasse(reqNumber, hasNumber)

        //validar caracteri especial
        const hasSpecial = /[!@#$%&*(,.?{}<>]/.test(valor)
        alternarClasse(reqSpecial, hasSpecial)

        if (hasLength && hasUpper && hasNumber && hasSpecial) {
            btnsubmit.removeAttribute('disabled');
            btnsubmit.style.cursor = "pointer"
        } else {
            btnsubmit.setAttribute('disabled','true');
        btnsubmit.style.cursor = "not-allowed"
        }




    })
    //função para trocar a cor do texto
    function alternarClasse(elemento, estavalido) {
        const icone = elemento.querySelector('i')

        if (estaValido) {
            elemento.classList.add('valid');
            elemento.classList.remove('invalid');
            icone.classList.remove('ph-circlue');
            icone.classList.add('ph-check-circle');
        } else {
            elemento.classList.remove('valid')
            elemento.classList.add('invalid')
            icone.classList.remove('ph-check-circcle');
            icone.classList.add('ph-circle');
        }
    }

    form.addEventListener('submit', (e) => {
e.preventDefault();
alert('formulário enviado com sucesso')
})


    
})