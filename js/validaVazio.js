const nome = document.querySelector('[data-nome]')
const msg = document.querySelector('[data-msg]')
const email = document.querySelector('[data-email')
const senha = document.querySelector('[data-senha')
const entrarBtn = document.querySelector('[data-entrar]')
const errorDiv = document.querySelector('#error-message')
const produto = document.querySelector('[data-nomeproduto]')
const imagem = document.querySelector('[data-imagem]')
const preco = document.querySelector('[data-preco]')
const descricao = document.querySelector('[data-descricao]')

function verificaVazio(field, num) {
    field.addEventListener('input', () => {
        field.setCustomValidity('')
        field.checkValidity()
        console.log(field.checkValidity())
        if (field.value.length > num) {
            field.setCustomValidity(`Este campo deve ter no máximo ${num} caracteres`)
        }
    })

    field.addEventListener('invalid', () => {
        if (field.value.length > 40) {
            field.setCustomValidity(`Este campo deve ter no máximo ${num} caracteres`)
        } else {
            field.setCustomValidity(`${field.name} não pode estar vazio`)
        }
    })
}


verificaVazio(nome, 40)
verificaVazio(msg, 120)
verificaVazio(produto, 20)
verificaVazio(imagem)
verificaVazio(preco)
verificaVazio(descricao, 120)
verificaVazio(email)
verificaVazio(senha)




function verificaEmail() {
    email.addEventListener('input', () => {
        email.setCustomValidity('')
        email.checkValidity()
    })

    email.addEventListener('invalid', () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('Formato de email inválido')
        }
    })
}

verificaEmail()


entrarBtn.addEventListener('click', () => {
    // Verifica as credenciais do usuário
    const emailLogin = document.querySelector('[data-email]').value;
    const senhaLogin = document.querySelector('[data-senha]').value;
    if (emailLogin === 'admin@example.com' && senhaLogin === 'admin123') {
        // Redireciona o usuário para o menu administrador
        window.location.href = '/pages/adicionar_produto.html';
    } else {
        // Exibe uma mensagem de erro para o usuário
        errorDiv.textContent = 'E-mail ou senha inválidos.';
    }
});