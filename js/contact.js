var timeline = gsap.timeline();
var form = document.querySelector("#form");

form.addEventListener("submit", function () {
  sendEmail();
  alert("Your Message Has Been Sent Successfully ... !");
});

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var body =
    "Name: " + name + "<br/>Email: " + email + "<br/>Message: " + message;
  Email.send({
    SecureToken: "4e11823d-ad87-4be9-ad38-380f2879bdac",
    To: "chhashimi34@gmail.com",
    From: "chhashimi34@gmail.com",
    Subject: "A New Message From Your Site",
    Body: body,
  });
}

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

gsap.from(".content h1", {
  delay: 1.5,
  opacity: 0,
  scale: 1.5,
  duration: 1,
});

gsap.from(".contactform", {
  opacity: 0,
  x: "100",
  delay: 2,
  duration: 1.5,
});

gsap.from("#form h2", {
  opacity: 0,
  y: "-100",
  delay: 2.5,
  duration: 1.5,
});

gsap.from(".btn", {
  opacity: 0,
  y: "100",
  delay: 2.5,
  duration: 1.5,
});

gsap.from("#name", {
  opacity: 0,
  delay: 2.5,
  duration: 1.5,
});

gsap.from("#email", {
  opacity: 0,
  delay: 2.5,
  duration: 2,
});

gsap.from("#message", {
  opacity: 0,
  delay: 2.5,
  duration: 2,
});

gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    // markers: true,
    start: "top 25%",
  },
  duration: 1.5,
  opacity: 0,
});

gsap.from(".box img", {
  scrollTrigger: {
    trigger: ".box img",
    scroller: "body",
    // markers: true,
    start: "top 29%",
  },
  opacity: 0,
  x: "-100",
  duration: 1,
});

gsap.from(".box h3", {
  scrollTrigger: {
    trigger: ".box h3",
    scroller: "body",
    // markers: true,
    start: "top 30%",
  },
  opacity: 0,
  x: "100",
  duration: 1,
});

gsap.from(".area img", {
  scrollTrigger: {
    trigger: ".area img",
    scroller: "body",
    // markers: true,
    start: "top 55%",
  },
  rotate: 360,
  x: "-100",
  duration: 1,
});

gsap.from(".area h1", {
  scrollTrigger: {
    trigger: ".area h1",
    scroller: "body",
    // markers: true,
    start: "top 100%",
  },
  opacity: 0,
  y: "100",
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
