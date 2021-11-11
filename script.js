$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "FreeLancer",
      "Developer",
      "Video Game Enthusiast",
      "Bot Developer",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Music", "Computers", "Video Games", "Coding!"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});

// scroll effects config
ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 1500,
  delay: 100,
});

// scroll effects locations
ScrollReveal().reveal(".pfp, .skills-content, .contact-text, .home-content", {
  delay: 200,
  origin: "left",
});
ScrollReveal().reveal(".serv-content .card, .message-form, .about-text", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".bars, .line", { delay: 200, origin: "right" });
ScrollReveal().reveal(".title", { delay: 200, origin: "top" });
ScrollReveal().reveal("#icon-code", {
  delay: 200,
  origin: "left",
  interval: 200,
});