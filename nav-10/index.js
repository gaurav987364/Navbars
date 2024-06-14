let open = document.querySelector('.nav .open');
let close = document.querySelector('.menu-content .close');



let tl = gsap.timeline();

//pura code ki chije kha se kese aygi 
tl.to(".menu-content",{
    opacity: 1,
    duration: 0.3,
    right:0,
})
tl.from(".menu-content h4",{
    opacity: 0,
    duration: 0.7,
    x: 140,
    stagger:0.2,
})
tl.from(".menu-content i",{
    opacity:0,
})

//is puri timeline ko hmne kiya pause
tl.pause()


//idharr  hmne timeline ko call kiya ki ab chaloo tum
open.addEventListener('click',()=>{
    tl.play()
})

close.addEventListener('click',()=>{
    tl.reverse()
})