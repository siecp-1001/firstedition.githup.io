window.addEventListener("load",() => {
    const loader= document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader");
    })
})
let btnback=document.querySelector('a');
btnback.addEventListener('click',()=>{
    window.history.back();
})

let btnforward=document.querySelector('a');
btnback.addEventListener('click',()=>{
    window.history.forward();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
})
