let btn = document.querySelector(".toggle-button");
let mess = document.querySelector(".message");
let body = document.querySelector("body");


btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    let isDark = document.body.classList.contains("dark");
    btn.textContent = isDark ?"🌞 Light Mode": "🌙 Dark Mode" ;
})