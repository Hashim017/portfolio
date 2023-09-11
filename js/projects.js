var timeline = gsap.timeline();

gsap.from("#left-section", {
  opacity: 0,
  x: "-40",
  duration: 1,
  delay: 1,
});
gsap.from("#right-section", {
  opacity: 0,
  x: "40",
  duration: 1,
  delay: 1,
});

gsap.from("#header", {
  opacity: 0,
  y: "-20",
  duration: 1.5,
});

gsap.from("#htmlCss-projects h1", {
  delay: 1.5,
  opacity: 0,
  scale: 1.5,
  duration: 1,
});

gsap.from(".items", {
  delay: 2,
  opacity: 0,
  scale: 1.2,
  duration: 1,
});

gsap.from(".items img", {
  delay: 2.5,
  opacity: 0,
  duration: 1,
});

gsap.to(".items img", {
  delay: 3,
  opacity: 1,
  duration: 1,
});

gsap.from(".items hr", {
  delay: 3,
  opacity: 0,
  y: "20",
  duration: 1,
});

gsap.from(".desc span", {
  delay: 3,
  opacity: 0,
  y: "-20",
  duration: 1,
});

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    // markers: true,
    start: "top 92%",
  },
  duration: 1,
  y: 20,
  opacity: 0,
});