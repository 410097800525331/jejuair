$(document).ready(function () {
  const footer = `
  <div class="inner">
      <!-- footer top -->
      <div class="footer_top">
        <div class="footer_link">
          <h4>항공권 예약</h4>
          <ul>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
          </ul>
        </div>
        <div class="footer_link">
          <h4>숙소예약</h4>
          <ul>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
          </ul>
        </div>
        <div class="footer_link">
          <h4>이벤트</h4>
          <ul>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
          </ul>
        </div>
        <div class="footer_link">
          <h4>공지사항</h4>
          <ul>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
            <li><a href="#">서브메뉴</a></li>
          </ul>
        </div>
      </div>
      <!-- footer bottom -->
      <div class="footer_bottom">
        <div class="company_info">
          <h3>(주)제주항공</h3>
          <div class="company_details">
            <p>대표이사 : 김이배&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 : 616-81-50527&nbsp;&nbsp;&nbsp;&nbsp;통신판매업신고 : 제주
              2006-125호&nbsp;&nbsp;&nbsp;&nbsp;호스팅 사업자 : AWS</p>
            <p>주소 : 제주특별자치도 제주시 신대로 64 (연동, 건설프레하임 3층)&nbsp;&nbsp;&nbsp;&nbsp;고객센터 : 1599-1500 (09:00 ~ 19:00)</p>
            <p>고객 문의 : jejuair.help@jejuair.net&nbsp;&nbsp;&nbsp;&nbsp;제휴 문의 : partnership@jejuair.net</p>
          </div>
          <div class="copyright">
            Copyright © Jeju Air. All Rights Reserved.
          </div>
        </div>
        <!-- link container -->
        <div class="link_container">
          <div class="sns_link">
            <a href="#"><img src="/assets/img/20250804165831645.png" alt="유튜브"></a>
            <a href="#"><img src="/assets/img/20250804165841751.png" alt="인스타그램"></a>
            <a href="#"><img src="/assets/img/20250804165859889.png" alt="페이스북"></a>
            <a href="#"><img src="/assets/img/20250804165850759.png" alt="틱톡"></a>
          </div>
          <div class="qr_link">
            <h4>앱을 다운로드하고<br>앱전용 혜택을<br>받아보세요!</h4>
            <img src="/assets/img/icon-app-down-qr.png" alt="qr">
          </div>
        </div>
      </div>
    </div>
  `;

  $("#footer_wrap").append(footer);
});