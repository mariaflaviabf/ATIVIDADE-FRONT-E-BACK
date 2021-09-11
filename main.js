import api from './service/api.js';

async function loadBandeiras() {
  const bandeiras = await api.readAll("bandeiras");

  for (const bandeira of bandeiras) {
    createBandeira(bandeira)
  }
}

function createBandeira(bandeira) {
  const lista = `<div> <h5 class= "title">${bandeira.name}</h5> </div>`;  

  const bandeiraGroup = document.querySelector(".bandeiraGroup");

  bandeiraGroup.insertAdjacentHTML('beforeend', lista);
}

loadBandeiras();