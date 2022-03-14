const API1 = 'https://mauvelous-leopard-5257.twil.io/friends';
const API2 = 'https://mauvelous-leopard-5257.twil.io/plays';
const API = 'https://mauvelous-leopard-5257.twil.io';
const axios = require('axios');

async function getData(link) {
  const result = await axios.get(link);
  const data = result.data;
  return data;
}


async function getUser (nombreusuario)
 {
  //TODO user logic
  const datosamigos = await getData(API1);
  const datosplays = await getData(API2);
  const usuarioamigos = datosamigos.friends.find(element => element.username == nombreusuario);
  const usuarioplays = datosplays.plays.find(element => element.username == nombreusuario);
  if (usuarioplays == null || usuarioplays == ""||usuarioamigos == null || usuarioamigos == "") {
    return null;
  }
  const amigos = await getData(API+usuarioamigos.uri);
  const plays = await getData(API+usuarioplays.uri);
  const usuario = {};
  pistas = transform(plays.plays);
  usuario.username = usuarioamigos.username;
  usuario.plays = plays.plays.length;
  usuario.friends = amigos.friends.length;
  usuario.tracks = pistas;
  usuario.uri = '/users/'+usuarioamigos.username;

  return usuario;
};

function transform(lista)
{
  let nuevalista = [];
  lista.forEach((c) => {
      if (!nuevalista.includes(c)) {
          nuevalista.push(c);
      }
  });
  return nuevalista;
}

module.exports = { getUser };
