import { verificaVazio } from "./validacao.js"

const nome = document.querySelector('[data-nome]')
const msg = document.querySelector('[data-msg]')


verificaVazio(nome, 20)
verificaVazio(msg, 120)