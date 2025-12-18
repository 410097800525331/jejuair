$(document).ready(function () {
  const ticketHTML = `
      <div class="ticket_panel">
      <button class="panel_toggle_btn" title="항공권 예매"><img src="/assets/img/ico-airplane.png" alt="icon"></button>
    </div>
    <div class="ticket_wrap">
      <!-- tab -->
      <div class="tab_menu">
        <div class="ticket_tab_btn active" data-tab="tab_booking">항공권 예매</div>
        <div class="ticket_tab_btn" data-tab="tab_reserve">예약 조회</div>
        <div class="ticket_tab_btn" data-tab="tab_flight">운항 조회</div>
      </div>
      <!-- ticket tab1 -->
      <div id="tab_booking" class="ticket_tab_content active">
        <!-- tab sub -->
        <div class="tab_sub">
          <button class="ticket_sub_tab_btn active" data-tab="tab_round">왕복</button>
          <button class="ticket_sub_tab_btn" data-tab="tab_oneway">편도</button>
          <button class="ticket_sub_tab_btn"><a href="#">다구간</a></button>
        </div>
        <!-- ticket top -->
        <div class="ticket_top" data-tab="tab_round">
          <div class="ticketing_target">
            <div class="input_box">
              <label>출발지</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_loc.svg" alt="icon">
            </div>
            <div class="arrow_btn"><img src="/assets/img/ico-arrow.svg" alt="icon"></div>
            <div class="input_box">
              <label>도착지</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_loc.svg" alt="icon">
            </div>
          </div>
        </div>
        <div class="ticket_top" data-tab="tab_oneway">
          <div class="ticketing_target">
            <div class="input_box">
              <label>출발지</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_loc.svg" alt="icon">
            </div>
            <div class="arrow_btn"><img src="/assets/img/ico-arrowB.svg" alt="icon"></div>
            <div class="input_box">
              <label>도착지</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_loc.svg" alt="icon">
            </div>
          </div>
        </div>
        <!-- ticket cutline -->
        <div class="ticket_cutline"></div>
        <!-- ticket bottom -->
        <div class="ticket_bottom">
          <div class="ticketing_target">
            <div class="input_box">
              <label>탑승일</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_cal.svg" alt="icon">
            </div>
            <br>
            <div class="input_box">
              <label>탑승객</label>
              <input type="text" placeholder="성인1">
              <img src="/assets/img/ico_person.svg" alt="icon">
            </div>
          </div>
          <div class="pay_method">
            <label>결제 방법</label>
            <div class="pay_options">
              <label><input type="radio" name="booking_pay" checked> 일반</label>
              <label><input type="radio" name="booking_pay"> 포인트</label>
              <label><input type="radio" name="booking_pay"> 기프티켓</label>
            </div>
          </div>
          <div class="discount_row">
            <label>할인 방법</label>
            <input class="discount_input" placeholder="프로모션 코드를 입력해주세요!">
            <button class="coupon_btn">운임 할인 쿠폰 ></button>
          </div>
          <div class="search">
            <button type="button" class="search_btn">항공권 검색</button>
          </div>
        </div>
      </div>
      <!-- ticket tab2 -->
      <div id="tab_reserve" class="ticket_tab_content">
        <div class="ticket_top">
          <div class="ticketing_target">
            <div class="input_box">
              <label>탑승객</label>
              <input type="text" placeholder="성 (Last Name)">
              <img src="/assets/img/ico_person.svg" alt="icon">
            </div>
            <div class="arrow_btn"></div>
            <div class="input_box">
              <label>탑승객</label>
              <input type="text" placeholder="이름 (First Name)">
              <img src="/assets/img/ico_person.svg" alt="icon">
            </div>
          </div>
        </div>
        <!-- ticket cutline -->
        <div class="ticket_cutline"></div>
        <!-- ticket bottom -->
        <div class="ticket_bottom">
          <div class="ticketing_target">
            <div class="input_box">
              <label>예약번호</label>
              <input type="text" placeholder="예약번호">
            </div>
            <br>
            <div class="input_box">
              <label>탑승일자</label>
              <input type="text" placeholder="YYYY.MM.DD">
              <img src="/assets/img/ico_cal.svg" alt="icon">
            </div>
          </div>
          <ul class="reserve_msg">
            <li>- 여행사, 공항, 고객센터, 비회원 예약 고객님도 조회 가능합니다.</li>
            <li>- 예약시 입력한 탑승객명을 입력해주세요.</li>
            <li>- 국제선의 경우 영문명을 입력해주세요.</li>
            <li>- 2명 이상 예약 조회는 <a href="#">여기</a>를 클릭해주세요.</li>
          </ul>
          <div class="search">
            <button type="button" class="search_btn">예약 조회</button>
          </div>
        </div>
      </div>
      <!-- ticket tab3 -->
      <div id="tab_flight" class="ticket_tab_content">
        <!-- tab sub -->
        <div class="tab_sub">
          <button class="ticket_sub_tab_btn active" data-sub="schedule">운항스케줄</button>
          <button class="ticket_sub_tab_btn" data-sub="current">출도착현황</button>
        </div>
        <div class="ticket_top">
          <div class="ticketing_target">
            <div class="input_box">
              <label>출발지</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_loc.svg" alt="icon">
            </div>
            <div class="arrow_btn"></div>
            <div class="input_box">
              <label>도착지</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_loc.svg" alt="icon">
            </div>
          </div>
        </div>
        <!-- ticket cutline -->
        <div class="ticket_cutline"></div>
        <!-- ticket bottom -->
        <div class="ticket_bottom" data-sub="schedule">
          <div class="ticketing_target">
            <div class="input_box">
              <label>탑승일</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_cal.svg" alt="icon">
            </div>
          </div>
          <div class="pay_method">
            <div class="pay_options">
              <label><input type="radio" name="flight_type" checked> 왕복</label>
              <label><input type="radio" name="flight_type"> 편도</label>
            </div>
          </div>
          <div class="search">
            <button type="button" class="search_btn">조회</button>
          </div>
        </div>
        <div class="ticket_bottom" data-sub="current">
          <div class="ticketing_target">
            <div class="input_box">
              <label>탑승일</label>
              <input type="text" placeholder="선택">
              <img src="/assets/img/ico_cal.svg" alt="icon">
            </div>
          </div>
          <div class="pay_method">
            <div class="pay_options">
              <label><input type="radio" name="flight_search" checked> 구간 조회</label>
              <label><input type="radio" name="flight_search"> 편명 조회</label>
            </div>
          </div>
          <div class="search">
            <button type="button" class="search_btn">조회</button>
          </div>
        </div>
      </div>
    </div>
  `;

  $(".ticket").append(ticketHTML);

  /* ===============================
     패널 상태 복원
  =============================== */
  const ticketEl = document.querySelector('.ticket');
  const panelBtn = document.querySelector('.panel_toggle_btn');
  const ticketPanel = document.querySelector('.ticket_panel');

  const panelState = localStorage.getItem('ticket_panel_state');

  if (panelState === 'closed') {
    ticketEl.classList.add('hidden');
    panelBtn.classList.add('active');
    ticketPanel.classList.add('active');
  }

  panelBtn.addEventListener('click', () => {
    ticketEl.classList.toggle('hidden');
    panelBtn.classList.toggle('active');
    ticketPanel.classList.toggle('active');

    const isHidden = ticketEl.classList.contains('hidden');
    localStorage.setItem('ticket_panel_state', isHidden ? 'closed' : 'open');
  });

  /* ===============================
     메인 탭 (항공권 / 예약 / 운항)
  =============================== */
  const mainTabs = document.querySelectorAll('.ticket_tab_btn');
  const mainContents = document.querySelectorAll('.ticket_tab_content');

  mainTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      mainTabs.forEach(b => b.classList.remove('active'));
      mainContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  /* ===============================
     항공권 예매 서브탭 (왕복 / 편도)
  =============================== */
  const bookingTab = document.querySelector('#tab_booking');

  if (bookingTab) {
    const subBtns = bookingTab.querySelectorAll('.ticket_sub_tab_btn[data-tab]');
    const ticketTops = bookingTab.querySelectorAll('.ticket_top[data-tab]');

    subBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        subBtns.forEach(b => b.classList.remove('active'));
        ticketTops.forEach(t => t.style.display = 'none');

        btn.classList.add('active');
        bookingTab.querySelector(`.ticket_top[data-tab="${target}"]`).style.display = 'block';
      });
    });

    ticketTops.forEach(t => {
      if (t.dataset.tab !== 'tab_round') t.style.display = 'none';
    });
  }

  /* ===============================
     운항 조회 서브탭
  =============================== */
  const flightTab = document.querySelector('#tab_flight');

  if (flightTab) {
    const subBtns = flightTab.querySelectorAll('.ticket_sub_tab_btn[data-sub]');
    const bottoms = flightTab.querySelectorAll('.ticket_bottom[data-sub]');

    // 초기 상태
    bottoms.forEach(b => b.style.display = 'none');
    flightTab.querySelector('.ticket_bottom[data-sub="schedule"]').style.display = 'block';

    subBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.sub;

        subBtns.forEach(b => b.classList.remove('active'));
        bottoms.forEach(c => c.style.display = 'none');

        btn.classList.add('active');
        flightTab.querySelector(`.ticket_bottom[data-sub="${target}"]`).style.display = 'block';
      });
    });
  }


});