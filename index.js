let backgroundContainer = document.querySelector("#background-container");
backgroundContainer.addEventListener("wheel", function (mouseScroll) {
  //console.log("mouse scrolled for", mouseScroll);
  mouseScroll.preventDefault();
  backgroundContainer.scrollLeft =
    backgroundContainer.scrollLeft + mouseScroll.deltaY;
});