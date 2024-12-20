var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.6, // Number of slides visible at once
  spaceBetween: 44, // Space between slides
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function selectKücültme() {
  const select = document.querySelector(".selectOne");
  const screenWidth = window.innerWidth;

  for (let i = 0; i < 2; i++) {
    const option = select.options[i];

    if (screenWidth < 471) {
      option.textContent = option.getAttribute("kisa");
    } else {
      option.textContent =
        option.value[0].toUpperCase() + option.value.slice(1);
    }
  }
}

window.addEventListener("resize", selectKücültme);
window.addEventListener("DOMContentLoaded", selectKücültme);
