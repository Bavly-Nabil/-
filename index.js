let links = document.querySelector('#links');
let userInfo = document.querySelector('#user_info');
let user = document.querySelector('#user');
let logout = document.querySelector('#logout');


let userName = localStorage.getItem("username");
if(userName){
    links.remove(),
    userInfo.style.display = 'block'
    user.innerHTML = localStorage.getItem("username")
}

logout.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(() =>{
        window.location= 'sign-up.html'

    },1500)
})
