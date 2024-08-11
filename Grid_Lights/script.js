
let Allboxes = document.querySelectorAll(".box");
let boxArr = [];
Allboxes.forEach((e) => {
  e.addEventListener("click", (e) => {
    // e.target.style.background = "red";
    e.target.style.backgroundImage = "url('../images/bg2.jpg')";
    e.target.style.backgroundSize = "contain";
    boxArr.push(e.target);
    if (boxArr.length >= Allboxes.length) {
      handleReverseLighting();
    }
  });
});

function handleReverseLighting() {
  boxArr.reverse().forEach((e, i) => {
    setTimeout(() => {
      // e.style.backgroundImage = "url('../images/bg1.jpg')";
      e.style.background = "transparent";
      if (i == Allboxes.length - 1) boxArr = [];
    }, (i + 1) * 300);
  });
}