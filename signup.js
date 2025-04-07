let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btnsign = document.getElementById('btnsign');




btnsign.addEventListener('click',regester);

function regester(e){
    e.preventDefault();
  if(username.value ===""|| email.value===""|| password.value===""){
      alert("please fill Data")

  }else{
      localStorage.setItem('username', username.value)
      localStorage.setItem('email', email.value)
      localStorage.setItem('password', password.value)
      setTimeout(() => {
          window.location = "log-in.html";
      },1500);
     
  }
}


