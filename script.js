let dark = document.getElementById("dark");
let light = document.getElementById("light");

let toggle = document.getElementById("toggle-mode");

let cardbg = document.querySelectorAll("#card");
let overviewbg = document.querySelectorAll("#overview");
let text = document.querySelectorAll("#text");
let heading = document.querySelectorAll("#title-head");

let header = document.getElementById("head");
let body = document.querySelector("body");

dark.addEventListener("click", () => {
  dark.style.display = "none";
  light.style.display = "flex";
  toggle.style.background = "hsl(230, 22%, 74%)";
  toggle.style.justifyContent = "flex-end";
  header.style.background = "hsl(225, 100%, 98%)";
  body.style.background = "hsl(0, 0%, 100%)";

  cardbg.forEach((cards) => {
    cards.addEventListener("mouseenter", () => {
      cards.style.background = "hsl(226, 22%, 85%)";
    });
    cards.addEventListener("mouseleave", () => {
      cards.style.background = "hsl(227, 47%, 96%)";
    });

    cards.style.background = "hsl(227, 47%, 96%)";
  });

  overviewbg.forEach((over) => {
    over.addEventListener("mouseenter", () => {
      over.style.background = "hsl(226, 22%, 85%)";
    });
    over.addEventListener("mouseleave", () => {
      over.style.background = "hsl(227, 47%, 96%)";
    });
    over.style.background = "hsl(227, 47%, 96%)";
  });

  text.forEach((txt) => {
    txt.style.color = "hsl(228, 12%, 44%)";
  });

  heading.forEach((h) => {
    h.style.color = "hsl(230, 17%, 14%)";
  });
});

light.addEventListener("click", () => {
  dark.style.display = "flex";
  light.style.display = "none";
  toggle.style.background =
    "linear-gradient(to right, hsl(210, 78%, 56%) , hsl(146, 68%, 55%))";
  toggle.style.justifyContent = "flex-start";
  header.style.background = "hsl(232, 19%, 15%)";
  body.style.background = "hsl(230, 17%, 14%)";

  cardbg.forEach((cards) => {
    cards.addEventListener("mouseenter", () => {
      cards.style.background = " hsl(229, 28%, 31%)";
    });
    cards.addEventListener("mouseleave", () => {
      cards.style.background = "hsl(228, 28%, 20%)";
    });
    cards.style.background = "hsl(228, 28%, 20%)";
  });

  overviewbg.forEach((over) => {
    over.addEventListener("mouseenter", () => {
      over.style.background = "hsl(229, 28%, 31%)";
    });
    over.addEventListener("mouseleave", () => {
      over.style.background = "hsl(228, 28%, 20%)";
    });
    over.style.background = "hsl(228, 28%, 20%)";
  });

  text.forEach((txt) => {
    txt.style.color = "hsl(228, 34%, 66%)";
  });

  heading.forEach((h) => {
    h.style.color = "hsl(0, 0%, 100%)";
  });
});
