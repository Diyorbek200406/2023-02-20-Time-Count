let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let icon = document.querySelector(".icon");
let icon1 = document.querySelector(".icon1");

setInterval(() => {
  const data = new Date();
  h1.innerText =
    data.getHours() >= 10 ? data.getHours() : "0" + data.getHours();
  h2.innerText =
    data.getMinutes() >= 10 ? data.getMinutes() : "0" + data.getMinutes();
  h3.innerText =
    data.getSeconds() >= 10 ? data.getSeconds() : "0" + data.getSeconds();
}, 1000);

let lbl = document.querySelector("#label");
let inp = document.querySelector("#input");

inp.focus();

inp.addEventListener("keyup", () => {
  if (inp.value.length < 4) {
    lbl.innerText = "Parol Kuchsiz";
    lbl.style.color = "red";
  } else if (inp.value.length < 6) {
    lbl.innerText = "Parol o'rtacha";
    lbl.style.color = "yellow";
  } else {
    lbl.innerText = "Parol Yetarlicha Kuchli ";
    lbl.style.color = "lime";
  }
});

icon.addEventListener("click", () => {
  if (inp.getAttribute("type") === "text") {
    inp.setAttribute("type", "password");
  } else {
    inp.setAttribute("type", "text");
  }
  icon.style.display = "none";
  icon1.style.display = "block";
});
icon1.addEventListener("click", () => {
  if (inp.getAttribute("type") === "text") {
    inp.setAttribute("type", "password");
  } else {
    inp.setAttribute("type", "text");
  }
  icon1.style.display = "none";
  icon.style.display = "block";
});
