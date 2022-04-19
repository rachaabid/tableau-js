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
    <th><button type="button" class="btn btn-success">update</button></th>
    <th><button type="button" class="btn btn-danger">delete</button></th>
  </tr>
  
    `
    i++;
  });
  document.getElementById('alltab').innerHTML=list;
}