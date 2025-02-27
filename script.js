// ✅ gsap loaded? 
console.log( gsap );

gsap.from("#bug", {
    y: -20, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out"
});

gsap.to("#bug", {
    x: -window.innerWidth - 100, 
    duration: 8, 
    ease: "linear"
});

gsap.to("#bug", {
    y: "+=2", 
    duration: 0.3, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut"
});

gsap.to(".legs", {
    y: "+=2", 
    duration: 0.2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut",
    stagger: 0.1 
});


// Animate Webhook Icon
gsap.to("#webhookIcon", {
    rotation: 360, 
    duration: .25,  
    repeat: -1,   
    ease: "linear" 
});

gsap.to("#rocket", {
    y: -500,
    x: 500,
    scale: 1.5,     
    opacity: 0,     
    duration: 2,   
    ease: "power2.in", 
    delay: 1 // 
});
