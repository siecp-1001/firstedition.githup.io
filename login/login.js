const switchers =[...document.querySelectorAll('.switcher')]
switchers.forEach(item =>{
    item.addEventListener('click', () => {
        switchers.forEach(item => item.parentElement.removeChild(is-active))
        this.parentElement.classList.add('is-active')
    })
})