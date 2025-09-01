const pages = [
  {
    // 프로필 기본 정보
    html: `
      <h1>김도은</h1>
      <div class="desc">계속 맞춰나가는 큐브 같은 디자이너입니다.</div>
      <div class="info">
        <strong>생일:</strong> 2001.05.09<br>
        <strong>전화번호:</strong> 010-9062-6533<br>
        <strong>이메일:</strong> ehdms119@naver.com
      </div>
    `
  },
  {
    // 경력사항
    html: `
      <div class="sub-title">Career</div>
      <ul>
        <li>2025 서울 청년축제 기획단 활동</li>
        <li>2024 자비스넷 디자인마케팅 근무</li>
        <li>2023 원광대 졸업준비위 기획팀장</li>
        <li>2022 원광대 시각정보 디자인 부학회장</li>
      </ul>
    `
  },
  {
    // 대외활동
    html: `
      <div class="sub-title">International Activity</div>
      <ul>
        <li>2025 SeSAC UXUI specialist 3기</li>
        <li>2023 전북 디자인데이 우수작 선정</li>
        <li>2023 LINC 3.0 창의캠프 참가(최우수상)</li>
        <li>2022 LINC 3.0 기술융합 캠프 참가</li>
        <li>2022 LINC 3.0 지식재산권 캠프 참가</li>
      </ul>
    `
  },
  {
    // 스킬
    html: `
      <div class="sub-title">Skills</div>
      <ul>
        <li>Photoshop / Illustrator</li>
        <li>Figma / XD</li>
        <li>HTML / CSS / JS</li>
        <li>Brand Design / UI Design</li>
        <li>Presentation / Communication</li>
      </ul>
    `
  }
];

let currentPage = 0;
const content = document.getElementById('carousel-content');
const leftBtn = document.getElementById('arrow-left');
const rightBtn = document.getElementById('arrow-right');

function showPage(idx) {
  content.innerHTML = pages[idx].html;
}
showPage(currentPage);

leftBtn.addEventListener('click', () => {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
});

rightBtn.addEventListener('click', () => {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
});
