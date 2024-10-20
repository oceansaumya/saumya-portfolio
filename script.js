
gsap.to("#line1, #line2, #line3, #line4, #line5", {
    duration: 1,
    opacity: 1,
    stagger: 0.4,
});
gsap.from(".about h3",{
opacity:0,
duration:1,
delay:1,
y:50,
scrollTrigger: {
    trigger: ".about h3",
    start: "top 60%",
    end:"40%", 
    marker:true,
}
})
const colors = [
    "#3B0B0F",
    "#5E1416",
    "#811B1D",
    "#A22528",
    "#C22D32",
    "#E0535E",
    "#F27174",
    "#FF8C8C",
    "#FFB2B2",
    "#F0B7B7"
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


    gsap.to("#circle1", { x: 100, y: 50, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle2", { x: 1200, y: 300, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle3", { x: 600, y: 700, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle4", { x: 400, y: 100, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle5", { x: 200, y: 600, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle6", { x: 900, y: 400, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle7", { x: 50, y: 800, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle8", { x: 1300, y: 200, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle9", { x: 300, y: 500, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle10", { x: 800, y: 250, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle11", { x: 1200, y: 600, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle12", { x: 450, y: 350, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle13", { x: 100, y: 900, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle14", { x: 600, y: 650, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle15", { x: 900, y: 50, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle16", { x: 400, y: 800, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle17", { x: 700, y: 400, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle18", { x: 200, y: 200, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle19", { x: 1000, y: 700, duration: 1,delay:1, backgroundColor: getRandomColor() });
    gsap.to("#circle20", { x: 1100, y: 400, duration: 1,delay:1, backgroundColor: getRandomColor() });


