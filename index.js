let fb = document.querySelector(".h1");
let ins = document.querySelector(".h2");
let wp = document.querySelector(".h3");
let twit = document.querySelector(".h4");
let pin = document.querySelector(".h5");

function showme(e) {
  if (e.classList[1] === "svg1") {
    fb.classList.add("show");
  } else if (e.classList[1] === "svg2") {
    ins.classList.add("show");
  } else if (e.classList[1] === "svg3") {
    wp.classList.add("show");
  } else if (e.classList[1] === "svg4") {
    twit.classList.add("show");
  } else if (e.classList[1] === "svg5") {
    pin.classList.add("show");
  }
}

function leaveme(e) {
  if (e.classList[1] === "svg1") {
    fb.classList.remove("show");
  } else if (e.classList[1] === "svg2") {
    ins.classList.remove("show");
  } else if (e.classList[1] === "svg3") {
    wp.classList.remove("show");
  } else if (e.classList[1] === "svg4") {
    twit.classList.remove("show");
  } else if (e.classList[1] === "svg5") {
    pin.classList.remove("show");
  }
}
