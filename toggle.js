const toggle = document.querySelector("#tgl")
const flexy = document.querySelector("main")

toggle.addEventListener("change", e =>{
    flexy.classList.toggle("show-month");
    console.log("RODAAAAAAAAAAAA")
    console.log(flexy.classList.toggle("show-monthly"))
})
