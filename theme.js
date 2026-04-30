/**
 * AssetFlow - 색상 토큰 (theme.js)
 * 모든 HTML 파일에서 <script src="theme.js"></script> 로 참조
 * 색상 변경 시 이 파일만 수정하면 전체 반영
 */

window.AF_THEME = {

  /* ── 자산 카테고리 색상 ── */
  asset: {
    checking:   '#4f8ef7',   // 입출금 (파란색 계열)
    investment: '#10b981',   // 투자 (초록)
    realestate: '#f59e0b',   // 부동산 (황금)
    car:        '#6366f1',   // 자동차 (보라)
    crypto:     '#f7931a',   // 가상화폐 (주황)
  },

  /* ── 페이지 accent 색상 ── */
  accent: {
    primary:    '#007aff',   // 기본 파란색 (account, card, loan, car, realestate, goal)
    income:     '#4ade80',   // 수입·투자 (초록)
    expense:    '#f87171',   // 지출 (빨간)
    chart:      '#4da3ff',   // 차트 순자산 선
    goal:       '#10b981',   // 목표 진행률
  },

  /* ── 시맨틱 색상 ── */
  semantic: {
    positive:   '#4ade80',   // 수익·증가
    negative:   '#f87171',   // 손실·감소
    warning:    '#fb923c',   // 경고·연체 (loan_page 전용)
    neutral:    '#888',      // 보조 텍스트
  },

  /* ── 배경·서피스 ── */
  surface: {
    bg:         '#1a1a1a',   // body 배경
    card:       '#242424',   // 카드 배경
    input:      '#2e2e2e',   // 입력 필드
    elevated:   '#333',      // 버튼·선택 요소
  },
};

/* 편의 접근자 */
window.AF_COLOR = window.AF_THEME;
