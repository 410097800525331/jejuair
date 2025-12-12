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