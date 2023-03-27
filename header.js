

const isLogin = sessionStorage.getItem('isLogin') ?? null;
const isAdmin = sessionStorage.getItem('isAdmin') ?? null;
// 익스 접속시 엣지로 자동 열기
if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
  window.location = "microsoft-edge:" + window.location.href;
}
if (!isLogin) location.href = './login.html';
document.write('<script src="./js/function.js"></script>');
const header = () => {
  // 로그인
  const dom = `
  <header>
  <nav>
    <ul class="hd-menu">
      <li class="M-box-up"><a href="./">Home</a></li>
      <li class="M-box-up"><a href="./history.html">이력관리</a></li>
      <li class="M-box-up"><a href="./trace.html">모니터링</a></li>
      <li class="M-box-up"><a href="./result.html">검색결과</a></li>
      ${isAdmin ? '<li class="M-box-up"><a href="./manage.html">상담사 관리</a></li>' : ''}
    </ul>
    <ul class="login">
      <li class="M-box-up bor10 login-btn setting-btn detail-btn">설정
        <div class="setting-detail login-detail bor10" >
            <h2>검색 추출 제한량(개)</h2>
            <div class="selbox">
              <div class="setSearchNumber">
                <button type="button">500</button>
                <input type="hidden" class="bor10 M-box-in" name="searchNumber" value="500">
                <ul class="option">
                  <li>500</li>
                  <li>600</li>
                  <li>700</li>
                  <li>800</li>
                  <li>900</li>
                  <li>1000</li>
                  <li>무제한</li>
                </ul>
              </div>
              <button class="save bor10 btn-off">저장</button>
            </div>
          <button type="button" class="esc">닫기</button>
        </div>
      </li>
      <li class="M-box-up bor10 login-btn notice-btn"><a href="./notice.html">알람</a></li>
      <li class="M-box-up bor10 login-btn user-btn detail-btn">사용자
        <div class="user-detail login-detail bor10 " >
          <p class="user-name"><strong>홍길동 님</strong>(usertest0001)</p>
          <a href="./info.html" class="my-info">내정보</a>
          <button class="logout" onclick='logout();'>로그아웃</button>
          <button class="esc">닫기</button>
        </div>
      </li>
    </ul>
  </nav>
</header>
  `;
  return document.write(dom);
}