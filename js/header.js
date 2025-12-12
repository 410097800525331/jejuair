$(document).ready(function () {
  const header = `
  <div class="inner">
    <!-- top bar -->
      <div class="top_bar_container">
        <div class="top_bar_left">
          <a href="#">공지사항</a>
          <a href="#">고객센터</a>
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
            <a href="index.html"><img src="/assets/img/logo.png" alt="제주항공 로고"></a>
          </h1>
          <!-- menu -->
          <div class="nav_menu_wrap">
            <ul class="nav_menu">
              <li><a href="#">항공권 예약</a></li>
              <li><a href="#">숙소 예약</a></li>
              <li><a href="#">여행 준비</a></li>
              <li><a href="#">투어/입장권</a></li>
              <li><a href="#">이벤트</a></li>
              <li><a href="#">공지사항</a></li>
            </ul>
            <!-- sub -->
            <div class="sub_menu_wrap">
              <div class="sub_menu_container">
                <div class="sub_menu">
                  <div>항공권 예약</div>
                  <ul class="sub_menu">
                    <li><a href="#">서브메뉴1</a></li>
                    <li><a href="#">서브메뉴2</a></li>
                    <li><a href="#">서브메뉴3</a></li>
                    <li><a href="#">서브메뉴4</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <div>숙소 예약</div>
                  <ul class="sub_menu">
                    <li><a href="#">서브메뉴1</a></li>
                    <li><a href="#">서브메뉴2</a></li>
                    <li><a href="#">서브메뉴3</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <div>여행 준비</div>
                  <ul class="sub_menu">
                    <li><a href="#">서브메뉴1</a></li>
                    <li><a href="#">서브메뉴2</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <div>투어/입장권</div>
                  <ul class="sub_menu">
                    <li><a href="#">서브메뉴1</a></li>
                    <li><a href="#">서브메뉴2</a></li>
                    <li><a href="#">서브메뉴3</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <div>이벤트</div>
                  <ul class="sub_menu">
                    <li><a href="#">서브메뉴1</a></li>
                    <li><a href="#">서브메뉴2</a></li>
                    <li><a href="#">서브메뉴3</a></li>
                  </ul>
                </div>
                <div class="sub_menu">
                  <div>공지사항</div>
                  <ul class="sub_menu">
                    <li><a href="#">서브메뉴1</a></li>
                    <li><a href="#">서브메뉴2</a></li>
                    <li><a href="#">서브메뉴3</a></li>
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