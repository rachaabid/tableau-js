let users = JSON.parse(localStorage.getItem("users")) || [];
function afficheList(){
  let list= ``;
  let i = 1;
  users.forEach(element => {
    list += ` <tr>
    <th>${i}</th>
    <th>${element.nom}</th>
    <th>${element.email}</th>
    <th>${element.age}</th>
    <th>${element.city}</th>
    <th><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">update</button></th>
    <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i-1})">delete</button></th>
  </tr>
    `
    i++;
  });
  document.getElementById('alltab').innerHTML=list;
}

function deleteItem(x){
  users.splice(x, 1);
  localStorage.setItem("users",JSON.stringify(users));
  afficheList();
}
//document.getElementById("myBtn").addEventListener("click", updateItem);
let id;
function updateItem(y){
  let user = users.find(user => user.id==y);
  document.getElementById('nom').value = user.nom;
  document.getElementById('email').value = user.email;
  document.getElementById('age').value = user.age;
  document.getElementById('city').value = user.city;
  id = y;
  // console.log(user);
}

function save(){
  // console.log(id);
  let user = users.find(user => user.id==id);
  user.nom = document.getElementById('nom').value;
  user.email = document.getElementById('email').value;
  user.age = document.getElementById('age').value;
  user.city = document.getElementById('city').value;
  localStorage.setItem("users",JSON.stringify(users));
   window.location.reload();
}