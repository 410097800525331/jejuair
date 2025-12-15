$(document).ready(function () {
  const header = `
  <div class="inner">
    <!-- top bar -->
      <div class="top_bar_container">
        <div class="top_bar_left">
          <a href="#">고객센터</a>
          <a href="/sub/notic.html">공지사항</a>
        </div>
        <div class="top_bar_right">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
          <div class="language_selector">
            <a href="#">한국어</a>
          </div>
        </div>
      </div>
      <!-- gnb -->
      <nav class="main_nav">
        <div class="main_nav_container">
          <!-- logo -->
          <h1 class="logo">
            <a href="../index.html"><img src="/assets/img/logo.png" alt="제주항공 로고"></a>
          </h1>
          <!-- menu -->
          <div class="nav_menu_wrap">
            <ul class="nav_menu">
              <li><a href="#">제주항공</a></li>
              <li><a href="#">항공권 예매</a></li>
              <li><a href="#">탑승 수속</a></li>
              <li><a href="#">여행 준비</a></li>
              <li><a href="#">여행 편의</a></li>
              <li><a href="#">이벤트/제휴</a></li>
            </ul>
            <!-- sub -->
            <div class="sub_menu_wrap">
              <div class="sub_menu_container">
                <div class="sub_menu">
                  <h4>제주항공</h4>
                  <ul class="sub_menu">
                    <li><a href="/sub/hero.html">회사소개</a></li>
                    <li><a href="/sub/recruit.html">채용안내</a></li>
                    <li><a href="/sub/ccm_hero.html">소비자중심경영</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <h4>예매 안내</h4>
                  <ul class="sub_menu">
                    <li><a href="#">항공권 예매</a></li>
                    <li><a href="#">예약 조회</a></li>
                    <li><a href="#">운항 조회</a></li>
                    <li><a href="#">비회원 예약조회</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <h4>탑승 수속 안내</h4>
                  <ul class="sub_menu">
                    <li><a href="/sub/processing.html">빠른 수속</a></li>
                    <li><a href="#">모바일 탑승권</a></li>
                    <li><a href="#">공항 정보</a></li>
                    <li><a href="#">출입국 신고서</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <h4>수하물 안내</h4>
                  <ul class="sub_menu">
                    <li><a href="#">사전 수하물</a></li>
                    <li><a href="#">기내 수하물</a></li>
                    <li><a href="#">위탁 수하물</a></li>
                    <li><a href="#">운송제한 물품</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <h4>J 멤버스</h4>
                  <ul class="sub_menu">
                  <li><a href="#">금융/여행자 보험</a></li>
                  <li><a href="#">골프 멤버십</a></li>
                  <li><a href="#">반려동물 운송 서비스</a></li>
                  <li><a href="#">펫 멤버십 / 펫 패스</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <h4>이벤트/제휴</h4>
                  <ul class="sub_menu">
                    <li><a href="#">진행중인 이벤트</a></li>
                    <li><a href="#">종료된 이벤트</a></li>
                    <li><a href="#">호텔/숙소</a></li>
                    <li><a href="#">렌터카</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- user menu -->
          <div class="nav_icons">
            <a href="#" title="my page"><img src="/assets/img/ico-search.png"></a>
            <!-- <a href="#" title="my page"><img src="/assets/img/ico-my-page.png" alt="my page icon"></a> -->
            <a href="#" title="my page"><img src="/assets/img/icon-login.png"></a>
          </div>
        </div>
      </nav>
  </div>
  `;

  $("#header_wrap").append(header);
});

$(window).on("scroll", function () {
  const scrollTop = $(this).scrollTop();

  if (scrollTop > 60) {
    $(".main_nav").addClass("fixed");
  } else {
    $(".main_nav").removeClass("fixed");
  }
});
