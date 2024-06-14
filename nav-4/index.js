document.addEventListener('DOMContentLoaded',function(){
    let timeline = gsap.timeline({paused: true});

    timeline.to('.menu-overlay',{
        duration:1,
        clipPath:"polygon(0 0,100% 0, 100% 100%,0 100%)",
        ease:'power2.out'
    });

    timeline.from('.menu-link, .btn',{
        opacity:0,
        y:60,
        stagger:0.05,
        duration:0.75,
        ease:'power1.inOut',
    },'<');

    timeline.to('.vidio-preview',{
        duration:1,
        height:'200px',
        ease:'power2.out'
    },'<');

    timeline.to('.menu-divider',{
        duration:1,
        width:'100%',
        ease:'power4.out'
    },'<');

    function openMenu(){
        document.querySelector('.menu-overlay').style.pointerEvents = 'all';
        timeline.play();
    }
    function closeMenu(){
        document.querySelector('.menu-overlay').style.pointerEvents = 'none';
        timeline.reverse();
    }

    document.querySelector('.menu-btn-open').addEventListener('click', openMenu);
    document.querySelector('.menu-btn-close').addEventListener('click', closeMenu);
    timeline.reverse();
});