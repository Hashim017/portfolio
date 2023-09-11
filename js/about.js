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

gsap.from("#box", {
  delay: 1.5,
  opacity: 0,
  duration: 1.5,
});

gsap.from(".leftsection h2", {
  delay: 2,
  x: 70,
  opacity: 0,
  duration: 1.5,
});

gsap.from(".leftsection p", {
  delay: 2,
  x: "-70",
  opacity: 0,
  duration: 1.5,
});

gsap.from("#sign", {
  delay: 2,
  x: 70,
  opacity: 0,
  duration: 1.5,
});

gsap.from(".rightsection", {
  delay: 2,
  x: "-70",
  opacity: 0,
  duration: 1.5,
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
