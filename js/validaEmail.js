import { verificaEmail } from "./validacao.js";
import { verificaVazio } from "./validacao.js";
import { login } from "./validacao.js";

const email = document.querySelector('[data-email')
const senha = document.querySelector('[data-senha')

verificaVazio(email)
verificaVazio(senha)
verificaEmail()

login()
