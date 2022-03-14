const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');


enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit

    username = document.getElementById("inputText").value;

    if (username == null || username == "") {
      alert("Nombre nulo");
      return false;
    }

  getUser(username);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) {
  const resp = await fetch(`api/users/${username}`);
  const data = await resp.json();
  console.log('data from back', data);
  if (data == null){
    alert("Nombre de usuario no existe");
      return false;
  }else{

    printValues(data);
  }
}

async function printValues(data){
  var div = document.getElementById("nombre");
  div.innerHTML = data.username;
  var tbody =  document.getElementById("body-table");
  var badge1 = document.createElement('span');
  badge1.className = 'badge bg-warning text-dark float-end';
  badge1.innerHTML = 'Friends: '+data.friends;
  div.appendChild(badge1);
  var badge2 = document.createElement('span');
  badge2.className = 'badge bg-success float-end';
  badge2.innerHTML = 'Plays: '+data.plays;
  div.appendChild(badge2);

  data.tracks.map((track) =>
            {
              async function tracks()
              {
                const tracks = document.createElement('p');
                tracks.className = 'col-6';
                tracks.innerHTML = track;
                tbody.appendChild(tracks);
              }

              tracks();
            }
            );

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
