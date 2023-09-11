var timeline = gsap.timeline();
function typer() {
  var typed = new Typed("#element", {
    strings: [
      "<br/>C and C++ Expert.",
      "<br/>C# DESKTOP DEVELOPER.",
      "<br/>C# Developer.",
      "<br/>HTML / CSS Expert.",
      "<br/>WEB DEVELOPER.",
    ],
    typeSpeed: 90,
  });
}
setTimeout(function () {
  typer();
}, 4000);

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

gsap.from(".right-content", {
  opacity: 0,
  y: 20,
  delay: 3,
  rotate: 360,
  duration: 1,
});

timeline
  .from("#about", {
    scale: 0,
    duration: 1,
    delay: 1,
    opacity: 0,
    x: 60,
  })

  .from(".btn", {
    y: 30,
    opacity: 0,
    duration: 1,
    rotate: 360,
  });

// .from("#main-bg", {
//   delay: 1,
//   rotate: 360,
//   duration: 1,
// });

gsap.from(".hr", {
  scrollTrigger: {
    trigger: ".hr",
    scroller: "body",
    // markers: true,
    start: "top 460",
  },
  width: 0,
  duration: 1.5,
});

gsap.from(".grey", {
  scrollTrigger: {
    trigger: ".grey",
    scroller: "body",
    // markers: true,
    start: "top 445",
  },
  opacity: 0,
  duration: 1.5,
  y: 20,
});

gsap.from("#experience h1", {
  scrollTrigger: {
    trigger: "#experience h1",
    scroller: "body",
    // markers: true,
    start: "top 430",
  },
  opacity: 0,
  duration: 1.5,
  y: 30,
});

gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    // markers: true,
    start: "top 85%",
  },
  duration: 1,
  width: 0,
});

gsap.from(".vertical img", {
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
  // delay: 1,
  opacity: 0,
  duration: 2,
});

gsap.from(".vertical", {
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
  duration: 1,
  height: 0,
  // delay: 1,
  opacity: 0,
});

gsap.from(".headings", {
  duration: 1,
  y: -20,
  opacity: 0,
  scrollTrigger: {
    trigger: ".headings",
    scroller: "body",
    // markers: true,
    start: "top 60%",
  },
});

gsap.from(".explain", {
  duration: 1,
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: ".headings",
    scroller: "body",
    // markers: true,
    start: "top 50%",
  },
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
