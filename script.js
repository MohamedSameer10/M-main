const hel = document.querySelector(".helcontent")
const helcontent = document.querySelector(".hello-content")
const signincontent = document.querySelector(".sign-content")
const wel = document.querySelector(".welcontent")
const cre = document.querySelector(".create-content")
const welbtn = document.querySelector("#newsignin")
const helbtn = document.querySelector(".signup")

helbtn.addEventListener("click",()=>{
    hel.classList.add("hel")
    helcontent.classList.add("move")
    signincontent.classList.add("sig")
    wel.classList.add("wel")
    cre.classList.add("cre")
})


welbtn.addEventListener("click",()=>{
    hel.classList.remove("hel")
    helcontent.classList.remove("move")
    signincontent.classList.remove("sig")
    wel.classList.remove("wel")
    cre.classList.remove("cre")
})