let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btnsign = document.querySelector("#sign_in");
let pareg = document.querySelector("#p");



let getUser =  localStorage.getItem("username");
let getPassword =  localStorage.getItem("password");

btnsign.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value ==="" || password.value===""){
        alert("please fill Data")
  
    }else{
        if(getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value
        ) {
        setTimeout(() => {
            window.location = "index.html";

          }, 1500);
        } else {
            p.innerHTML="username or password is wrong !!"

        }
    }
  });

