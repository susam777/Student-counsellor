const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=set.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.grtAttribute('id')
        if(top>=offset && top< offset + height){
            navLink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a [href*='+id+']').classList.add('active')
            })
        }
    })
    
var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)


menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};
let menubar=document.querySelector('#menu')
let navbar=Document.querySelector('.navbar')
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

var type=new Typed('.textline',{
    Strings:['Student', 'some text', 'add text'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})


