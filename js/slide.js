$(sildeDatas).each((idx, data) => {
  const silde = `
      <div class="slide_item">
        <div class="banner_text">
          <h2>${data.bannerText}</h2>
          <p>${data.subText}</p>
          <button class="more_btn">자세히 보기</button>
        </div>
        <img src="${data.bannerImg}">
      </div>
  `;

  $(".slides").append(silde);
});

window.addEventListener("load", function () {
  const slides = document.querySelector(".slides");
  const items = document.querySelectorAll(".slide_item");

  let index = 0;
  const slideWidth = items[0].offsetWidth;

  // 첫 번째 슬라이드 복제
  const clone = items[0].cloneNode(true);
  slides.appendChild(clone);

  const total = document.querySelectorAll(".slide_item").length;

  function moveSlide() {
    index++;
    slides.style.transition = "transform 1s ease";
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // transition이 끝난 뒤 자연스럽게 리셋
  slides.addEventListener("transitionend", () => {
    if (index === total - 1) {
      slides.style.transition = "none";
      slides.style.transform = "translateX(0)";
      index = 0;
    }
  });

  setInterval(moveSlide, 2500);
});