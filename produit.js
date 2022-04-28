function create(event) {
  event.preventDefault();
  var nom = document.getElementById("nom");
  var descript = document.getElementById("descript");  
  let isValidated = true;

 if (nom.value == "") {
   nom.classList.add('is-invalid');
   nom.classList.remove('is-valid');
   isValidated = false;
 }
 else {
   nom.classList.add('is-valid');
   nom.classList.remove('is-invalid');
 }

 if (descript.value == "") {
  descript.classList.add('is-invalid');
  descript.classList.remove('is-valid');
  isValidated = false;
}
else {
  descript.classList.add('is-valid');
  descript.classList.remove('is-invalid');
}

if (isValidated == true){
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let id=Math.random().toString(36).substring(2);
  const user = {
    id: id,
    nom: nom.value,
    descript: descript.value 
  }
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users));
  window.open('produit.html','_blank');
}
}

let users = JSON.parse(localStorage.getItem("users")) || [];
function affiche() {
  let p = ``;
  
  users.forEach((element,i) => {
    p += `<tr>
  <th>${i}</th>
  <th>${element.nom}</th>
  <th>${element.descript}</th>
  <th><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">Update</button></th>
  <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i - 1})">Delete</button></th>
</tr>`
    
  });
  document.getElementById('tab').innerHTML = p;
}

function deleteItem(x) {
  users.splice(x, 1);
  localStorage.setItem("users", JSON.stringify(users));
  affiche();
}

let id;
function updateItem(y) {
  let user = users.find(user => user.id == y);
  document.getElementById("nom").value = user.nom;
  document.getElementById("descript").value = user.descript;
  id = y;
}

function save() {
  let user = users.find(user => user.id == id);
  user.nom = document.getElementById("nom").value;
  user.descript = document.getElementById("descript").value;
  localStorage.setItem("users", JSON.stringify(users));
  window.location.reload();
}