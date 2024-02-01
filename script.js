const t1 = gsap.timeline({scrollTrigger:{
    trigger:"#wrapper",
    // scroller:"body",
    start:"5% 0%",
    end:"bottom 90%",
    markers:true,
    pin:true,
    scrub:2
}});
t1.to(".top-content",{
    rotateX:"100deg",
    opacity:0,
    duration:1
},'rc')
t1.to(".bottom-content",{
    rotateX:"-100deg",
    opacity:0, 
    duration:1 
},'rc')
t1.to("#image",{
    width:"100vw",
    height:"100vh",
    duration:5,
},'rc')