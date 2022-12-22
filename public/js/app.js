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

    let copytext = document.querySelector(".copy-text")
    copytext.querySelector("button").addEventListener("click", function(){
        let input = copytext.querySelector("input.text");
        input.select();
        document.execCommand('copy');
        copytext.classList.add('active');
        window.getSelection.removeAllRanges();
        setTimeout(function(){
            copytext.classList.remove('active');
        },2500);
    });
})




