const switchers =[...document.querySelectorAll('.switcher')]
switchers.forEach(item =>{
    item.addEventListener('click', () => {
        switchers.forEach(item => item.parentElement.removeChild(is-active))
        this.parentElement.classList.add('is-active')
    })
})
window.addEventListener("load",() => {
    const loader= document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader");
    })
})