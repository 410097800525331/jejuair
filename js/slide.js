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

window.addEventListener("load", () => {
  const slides = document.querySelector(".slides")
  let items = document.querySelectorAll(".slide_item")
  let index = 0
  let slideWidth

  const clone = items[0].cloneNode(true)
  slides.appendChild(clone)

  function setWidth() {
    items = document.querySelectorAll(".slide_item")
    slideWidth = document.querySelector("#slide_wrap").offsetWidth
    items.forEach(item => item.style.width = slideWidth + "px")
    slides.style.transform = `translateX(-${index * slideWidth}px)`
  }

  function moveSlide() {
    index++
    slides.style.transition = "transform 1s ease"
    slides.style.transform = `translateX(-${index * slideWidth}px)`
  }

  slides.addEventListener("transitionend", () => {
    if (index === items.length - 1) {
      slides.style.transition = "none"
      slides.style.transform = "translateX(0)"
      index = 0
    }
  })

  window.addEventListener("resize", setWidth)
  setWidth()
  setInterval(moveSlide, 2500)
})
