import { verificaVazio } from "./validacao.js";

const produto = document.querySelector('[data-nomeproduto]')
const preco = document.querySelector('[data-preco]')
const descricao = document.querySelector('[data-descricao]')
const categoria = document.querySelector('#categoria')
const imagem = document.querySelector('[data-imagem]')

verificaVazio(produto, 20)
verificaVazio(preco)
verificaVazio(descricao, 120)
verificaVazio(categoria)
verificaVazio(imagem)

// const input = document.querySelector('#url-img')

// imagem.style.opacity = 10
// input.addEventListener('change', updateImageDisplay)

// function updateImageDisplay() {
//     while(imagem.firstChild) {
//       imagem.removeChild(imagem.firstChild);
//     }
  
//     const curFiles = input.files;
//     if (curFiles.length === 0) {
//       const para = document.createElement('p');
//       para.textContent = 'No files currently selected for upload';
//       imagem.appendChild(para);
//     } else {
//       const list = document.createElement('ol');
//       imagem.appendChild(list);
  
//       for (const file of curFiles) {
//         const listItem = document.createElement('li');
//         const para = document.createElement('p');
//         if (validFileType(file)) {
//           para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
//           const image = document.createElement('img');
//           image.src = URL.createObjectURL(file);
  
//           listItem.appendChild(image);
//           listItem.appendChild(para);
//         } else {
//           para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
//           listItem.appendChild(para);
//         }
  
//         list.appendChild(listItem);
//       }
//     }
//   }

//   updateImageDisplay()
