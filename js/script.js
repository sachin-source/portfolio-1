let menu = document.querySelector("#menu-btn")
let header = document.querySelector(".header")

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}
let themeToggler = document.querySelector("#theme-toggler")
themeToggler.onclick = ()=> {
    //var _ = (themeToggler.classList.toggle('fa-sun') ? themeToggler.classList.add('active')) : themeToggler.classList.remove('active')
    themeToggler.classList.toggle('fa-sun')
    document.body.classList.toggle('active')
}