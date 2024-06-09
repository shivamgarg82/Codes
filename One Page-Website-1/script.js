let btn = document.querySelectorAll('.six__b');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
btn.addEventListener('click', () => {
  let savename = localstorage.setItem('name',name.value);
  let saveemail = localstorage.setItem('email',email.value);
  let savemessage = localstorage.setItem('message',message.value);
});
