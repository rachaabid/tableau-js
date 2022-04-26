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
    <th><button type="button" class="btn btn-success" onclick="updateItem(${element.id})" data-bs-toggle="modal" data-bs-target="#${element.id}">update</button></th>
    <th><button type="button" class="btn btn-danger" onclick="deleteItem(${i-1})">delete</button></th>
  </tr>
  
  <div class="modal fade" id="${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">update list</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="row mt-3" >
      <div class="form-group">
        <label for="userName">User Name</label>
        <input type="text" class="form-control" name="nom" id="nom" placeholder="User Name" value="${element.nom}">
      </div>

      <div class="form-group">
        <label for="E-mail">E-mail</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="E-mail" value="${element.email}">
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" name="age" id="age" placeholder="age" value="${element.age}">
      </div>

      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" name="city" id="city" placeholder="city" value="${element.city}">
      </div>
  
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="save(${element.id})">Save changes</button>
      </div>
    </div>
  </div>
</div>

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
// document.getElementById("myBtn").addEventListener("click", updateItem);
let id;
function updateItem(y){
  let user = users.find(user => user.id==y);
  document.getElementById('nom').value = user.nom;
  document.getElementById('email').value = user.email;
  document.getElementById('age').value = user.age;
  document.getElementById('city').value = user.city;
  id = y;
}

function save(id){
  console.log(id);
  let user = users.find(user => user.id==id);
  user.nom = document.getElementById('nom').value;
  user.email = document.getElementById('email').value;
  user.age = document.getElementById('age').value;
  user.city = document.getElementById('city').value;
  localStorage.setItem("users",JSON.stringify(users));
  window.location.reload();
}