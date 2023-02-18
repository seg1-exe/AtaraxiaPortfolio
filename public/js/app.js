window.addEventListener('load', ()=> {
    const nav = document.querySelector('nav')

    //Nav stick
    window.addEventListener('scroll', ()=>{
        if(window.scrollY>10){
            nav.classList.add('nav-scroll')
        } else {
            nav.classList.remove('nav-scroll')
        }
    })

    var menuIcon = document.querySelector(".menu-icon");
    var menu = document.querySelector(".menu");
    var close = document.querySelector(".close");

    menuIcon.addEventListener("click", afficherMenu);
    function afficherMenu() {
        menu.style.display = "flex";
    };

    close.addEventListener("click", fermerMenu);
    function fermerMenu() { 
        menu.style.display = "none";
    };

    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200,
    gutter: 5
    });

    // element argument can be a selector string
    //   for an individual element
    var msnry = new Masonry( '.grid', {
    // options
    });

    //Copier email
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




