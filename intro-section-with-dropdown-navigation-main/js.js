const features = document.querySelector(".features")
const company = document.querySelector(".company")
const list1 = document.querySelector(".list1")
const list2 = document.querySelector(".list2")

list1.style.display = "none"
list2.style.display = "none"

features.addEventListener("click", (e) => {
    e.preventDefault()
    if(list1.style.display === "none"){
        list1.style.display = "flex"
        list2.style.display = "none"
    }else{
        list1.style.display = "none"
    }
})

company.addEventListener("click", (e) => {
    e.preventDefault()
    if(list2.style.display === "none"){
        list2.style.display = "flex"
        list1.style.display = "none"
    }else {
        list2.style.display = "none"
    }
})

const botao = document.querySelector(".display-mobile")
const navList = document.querySelector(".nav-list")
const main = document.querySelector(".principal")

botao.addEventListener("click", (e) => {
    e.preventDefault()
    navList.classList.toggle("active")
    main.classList.toggle("active")
    
    

})

