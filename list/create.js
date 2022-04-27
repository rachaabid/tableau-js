function create(event){
  event.preventDefault();
  var name = document.getElementById('nom');
  var email = document.getElementById('email');
  var age = document.getElementById('age');
  var city = document.getElementById('city');
  
 let isValidated = true;

 if (name.value == "") {
   name.classList.add('is-invalid');
   name.classList.remove('is-valid');
   isValidated = false;
 }
 else {
   name.classList.add('is-valid');
   name.classList.remove('is-invalid');
 }
 if (email.value == "" || email.value.indexOf('@')==-1) {
  email.classList.add("is-invalid");
  email.classList.remove("is-valid");
  isValidated = false;
}
else {
  email.classList.add("is-valid");
  email.classList.remove("is-invalid");
}

if (age.value == "") {
  age.classList.add("is-invalid");
  age.classList.remove("is-valid");
  isValidated = false;
}
else {
  age.classList.add("is-valid");
  age.classList.remove("is-invalid");
}

if (city.value == "") {
  city.classList.add("is-invalid");
  city.classList.remove("is-valid");
  isValidated = false;
}
else {
  city.classList.add("is-valid");
  city.classList.remove("is-invalid");
}

if (isValidated = true){
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let id=Math.random().toString(36).substring(2);
  const user = {
    id: id,
    nom: name.value,
    email: email.value,
    age: age.value,
    city: city.value
   
  }
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users));
  window.open('list.html','_blank');
}
}
