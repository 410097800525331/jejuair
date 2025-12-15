const convenienceSection = document.querySelector('.convenience_wrap');
const container = convenienceSection.querySelector('.tab_contents');

/* 콘텐츠 생성 */
convenienceTab.forEach((data, idx) => {
  const isActive = idx === 0 ? 'active' : '';

  const tab = `
    <div id="${data.id}" class="tab_content ${isActive}">
      <a href="${data.link1}" class="tab_text">
        <img src="${data.img1}" alt="travel img">
        <div>
          <p>${data.text1}</p>
          <h4>${data.text2}</h4>
        </div>
      </a>
      <a href="${data.link2}" class="tab_text">
        <img src="${data.img2}" alt="travel img">
        <div>
          <p>${data.text3}</p>
          <h4>${data.text4}</h4>
        </div>
      </a>
      <a href="${data.link3}" class="tab_text">
        <img src="${data.img3}" alt="travel img">
        <div>
          <p>${data.text5}</p>
          <h4>${data.text6}</h4>
        </div>
      </a>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', tab);
});

/* 탭 전환 */
const tabs = convenienceSection.querySelectorAll('.tab');
const contents = convenienceSection.querySelectorAll('.tab_content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    convenienceSection
      .querySelector(`#${targetId}`)
      .classList.add('active');
  });
});
