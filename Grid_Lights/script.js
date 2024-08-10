
let Allboxes = document.querySelectorAll(".box");
let boxArr = [];
Allboxes.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.style.background = "red";
    boxArr.push(e.target);
    if (boxArr.length >= Allboxes.length) {
      handleReverseLighting();
    }
  });
});

function handleReverseLighting() {
  boxArr.reverse().forEach((e, i) => {
    setTimeout(() => {
      e.style.background = "transparent";
      if (i == Allboxes.length - 1) boxArr = [];
    }, (i + 1) * 300);
  });
}

// CHANGE BACKGROUND COLOR
let c = document.getElementById("colorChange");
c.addEventListener("change", (e) => {
  document.body.style.background = e.target.value;
});
