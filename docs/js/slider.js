function slider() {
  document.addEventListener("click", function (e) {
    const slideElement = document.querySelector(".slider__elements");
    if (e.target.className === "slider-right") {
      for (let index = 0; index < slideElement.childElementCount; index++) {
        if (slideElement.children[slideElement.childElementCount - 1].className === "slider-element") {
          slideElement.children[slideElement.childElementCount - 1].className = "slider-element none";
          slideElement.children[0].className = "slider-element";
          break;
        } else if (slideElement.children[index].className === "slider-element") {
          slideElement.children[index].className = "slider-element none";
          slideElement.children[index + 1].className = "slider-element";
          break;
        }
      }
    }
    if (e.target.className === "slider-left") {
      for (let index = slideElement.childElementCount; index > 0; index--) {
        if (slideElement.children[0].className === "slider-element") {
          slideElement.children[0].className = "slider-element none";
          slideElement.children[slideElement.childElementCount - 1].className = "slider-element";
          break;
        } else if (slideElement.children[index - 1].className === "slider-element") {
          slideElement.children[index - 1].className = "slider-element none";
          slideElement.children[index - 2].className = "slider-element";
          break;
        }
      }
    }
  });
  function avto() {
    const slideElement = document.querySelector(".slider__elements");
    for (let index = 0; index < slideElement.childElementCount; index++) {
      if (slideElement.children[slideElement.childElementCount - 1].className === "slider-element") {
        slideElement.children[slideElement.childElementCount - 1].className = "slider-element none";
        slideElement.children[0].className = "slider-element";
        break;
      } else if (slideElement.children[index].className === "slider-element") {
        slideElement.children[index].className = "slider-element none";
        slideElement.children[index + 1].className = "slider-element";
        break;
      }
    }
  }
  setInterval(avto, 4000);
}
slider();
