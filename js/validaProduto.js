import { verificaVazio } from "./validacao.js";

const produto = document.querySelector('[data-nomeproduto]')
const preco = document.querySelector('[data-preco]')
const descricao = document.querySelector('[data-descricao]')
const categoria = document.querySelector('#categoria')
const imagem = document.querySelector('[data-imagem]')

verificaVazio(produto, 20)
verificaVazio(preco)
verificaVazio(descricao, 150)
verificaVazio(categoria)
verificaVazio(imagem)