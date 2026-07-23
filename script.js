
// Initialize Lenis
const lenis = new Lenis();


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const tl = gsap.timeline();
tl.from("#main",{
  opacity:0,
  duration:1,
  delay:0.2
})
tl.from(".name-txt h1", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power2.out"
},"<")
.from(".hero span", {
  x: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
}, "-=0.8")
.from(".para1", {
  x: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
}, "-=1.4")
.from(".para2", {
  x: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
}, "-=0.8")
.to(".support-txt span", {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
}, "<");

gsap.to(".small-head", {
  x: "-68.5%", 
  duration: 18,  
  ease: "linear",
  repeat: -1,   
});
tl.from(".click", {
   opacity:0,
  duration: 1,  
  ease: "linear",
   
},"<");

document.querySelector('.click').addEventListener('click', function () {
  this.style.backgroundColor = '#911a6d';
  this.style.color = '#f6dee7';
  window.location.href = "upi://pay?pa=bhr8t2@ptyes&pn=SK%20Ashiq&cu=INR&tn=Payment";
});



