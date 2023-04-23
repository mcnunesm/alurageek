


export function verificaVazio(field, num) {
    field.addEventListener('input', () => {
        field.setCustomValidity('')
        field.checkValidity()
        console.log(field.checkValidity())
        if (field.value.length > num) {
            field.setCustomValidity(`Este campo deve ter no máximo ${num} caracteres`)
        }
    })

    field.addEventListener('invalid', () => {
        if (field.value.length > num) {
            field.setCustomValidity(`Este campo deve ter no máximo ${num} caracteres`)
        } else {
            field.setCustomValidity(`O campo ${field.name} não pode estar vazio`)
        }
    })
}

export function verificaEmail() {
    const email = document.querySelector('[data-email')
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


export function login() {
    const entrarBtn = document.querySelector('[data-entrar');
    const errorDiv = document.querySelector('#error-message'); 
  
    entrarBtn.addEventListener('click', (event) => {
      event.preventDefault(); 

      const emailLogin = document.querySelector('[data-email]').value;
      const senhaLogin = document.querySelector('[data-senha]').value;
      if (emailLogin === 'admin@example.com' && senhaLogin === 'admin123') {

        window.location.href = '/pages/adicionar_produto.html';
      } else {

        errorDiv.textContent = 'E-mail ou senha inválidos.';
      }
    });
  }

