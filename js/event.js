$(eventDatas).each((idx, data) => {
  const event = `
    <div class="event_card">
      <div>
        <span class="badge">${data.day}</span>
        <h3>${data.head}</h3>
        <p>${data.txt}</p>
        <p class="color">${data.date}</p>
      </div>
    </div>
  `;

  $("#ongoing").append(event);
});