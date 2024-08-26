const routes = {
  // 기본 페이지들
  home: '/',
  login: '/login',
  register: '/register',

  // 그림 심리 분석 관련 페이지들
  analysisIntro: '/analysis-intro',
  analysisInput: '/analysis-input',
  analysisSummary: '/analysis-summary/:id',
  analysisDetail: '/analysis-detail/:id',
  analysisHistory: '/analysis-history',

  // 센터 관련 페이지들
  centerList: '/centers',
  centerSelect: '/centers/select',
  centerInfo: '/centers/:id',
  centerReservation: '/centers/:id/reservation',

  // 육아 혜택 정보 관련 페이지들
  benefitList: '/benefits',
  benefitDetail: '/benefits/:id',

  // 마이페이지 (사용자 및 관리자)
  mypage: '/mypage',
  mypagePartnerCenterRegister: '/mypage/partner-center-register',
  mypageUserInfoEdit: '/mypage/user-info-edit',
  mypageChildInfoRegister: '/mypage/child-info-edit',
  mypageBenefitWrite: '/mypage/benefit-write',

  // 마이페이지 제휴센터 관련 페이지들
  mypagePartnerCenterRequestList: '/mypage/partner-center-request-list',
  mypagePartnerCenterRequestManage: '/mypage/partner-center-request-list/:id',

  // 에러 페이지
  error: '/*',
};

export default routes;
