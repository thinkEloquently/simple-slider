const getAllImgHolder = document.querySelectorAll(".img-holder");

const autoSlide = () => {
  let n = 0;
  setInterval(() => {
    for (const i of getAllImgHolder) {
      i.style.display = "none";
    }
    getAllImgHolder[n].style.display = "initial";
    if (n < getAllImgHolder.length-1) {
        n++;
    } else {
        n = 0;
    }
  }, 3000);
};

autoSlide();
