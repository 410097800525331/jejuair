
// ##### slide #####
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

    if (index === total - 1) {
      setTimeout(() => {
        slides.style.transition = "none";
        slides.style.transform = "translateX(0)";
        index = 0;
      }, 700);
    }
  }

  setInterval(moveSlide, 2500);
});


// ##### notic #####
const items = document.querySelectorAll(".notice_item");

items.forEach(item => {
  const noticeBtn = item.querySelector(".notice_item button");

  noticeBtn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // 모두 초기화
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector("button").classList.remove("active");
    });

    // 클릭한 것만 열기
    if (!isActive) {
      item.classList.add("active");
      noticeBtn.classList.add("active");
    }
  });
});

// const items = document.querySelectorAll(".notice_item");

// items.forEach(item => {
//   const noticeBtn = item.querySelector(".notice_item button");

//   noticeBtn.addEventListener("click", () => {
//     const isActive = item.classList.contains("active");

//     items.forEach(i => i.classList.remove("active"));

//     if (!isActive) {
//       item.classList.add("active");
//     }
//   });
// });