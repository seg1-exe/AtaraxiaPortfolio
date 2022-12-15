window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader')
    const nav = document.querySelector('nav')

    loader.classList.add('fondu-out');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY>10){
            nav.classList.add('nav-scroll')
        } else {
            nav.classList.remove('nav-scroll')
        }
    })
})




