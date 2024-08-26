import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './constant/routes';
import ProtectedRoute from './components/templates/ProtectedRoute';
import HomePage from './pages/defaultPage/Homepage';
import LoginPage from './pages/defaultPage/LoginPage';
import RegisterPage from './pages/defaultPage/RegisterPage';
import AnalysisIntroPage from './pages/analysisPage/AnalysisIntroPage';
import AnalysisInputPage from './pages/analysisPage/AnalysisInputPage';
import AnalysisDetailPage from './pages/analysisPage/AnalysisDetailPage';
import AnalysisHistoryPage from './pages/analysisPage/AnalysisHistoryPage';
import CenterListPage from './pages/centerPage/CenterListPage';
import CenterSelectPage from './pages/centerPage/CenterSelectPage';
import CenterInfoPage from './pages/centerPage/CenterInfoPage';
import CenterReservationPage from './pages/centerPage/CenterReservationPage';
import BenefitListPage from './pages/benefitPage/BenefitListPage';
import BenefitDetailPage from './pages/benefitPage/BenefitDetailPage';
import MyPage from './pages/myPage/MyPage';
import MyPageChildInfoRegisterPage from './pages/myPage/MyPageChildInfoRegisterPage';
import MyPagePartnerCenterRegisterPage from './pages/myPage/MyPagePartnerCenterRegisterPage';
import MyPagePartnerCenterRequestListPage from './pages/myPage/MyPagePartnerCenterRequestListPage';
import MyPagePartnerCenterRequestManagePage from './pages/myPage/MyPagePartnerCenterRequestManagePage';
import MyPageUserInfoEditPage from './pages/myPage/MyPageUserInfoEditPage';
import MyPageBenefitWrite from './pages/myPage/MyPageBenefitWrite';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.analysisIntro} element={<AnalysisIntroPage />} />
          <Route
            path={routes.analysisInput}
            element={
              <ProtectedRoute>
                <AnalysisInputPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.analysisDetail}
            element={
              <ProtectedRoute>
                <AnalysisDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.analysisHistory}
            element={
              <ProtectedRoute>
                <AnalysisHistoryPage />
              </ProtectedRoute>
            }
          />
          <Route path={routes.centerList} element={<CenterListPage />} />
          <Route path={routes.centerSelect} element={<CenterSelectPage />} />
          <Route path={routes.centerInfo} element={<CenterInfoPage />} />
          <Route
            path={routes.centerReservation}
            element={
              <ProtectedRoute>
                <CenterReservationPage />
              </ProtectedRoute>
            }
          />
          <Route path={routes.benefitList} element={<BenefitListPage />} />
          <Route path={routes.benefitDetail} element={<BenefitDetailPage />} />
          <Route
            path={routes.mypage}
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.mypageChildInfoRegister}
            element={
              <ProtectedRoute>
                <MyPageChildInfoRegisterPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.mypagePartnerCenterRegister}
            element={
              <ProtectedRoute>
                <MyPagePartnerCenterRegisterPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.mypagePartnerCenterRequestList}
            element={
              <ProtectedRoute requiredAdmin={'true'}>
                <MyPagePartnerCenterRequestListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.mypagePartnerCenterRequestManage}
            element={
              <ProtectedRoute requiredAdmin={'true'}>
                <MyPagePartnerCenterRequestManagePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.mypageUserInfoEdit}
            element={
              <ProtectedRoute>
                <MyPageUserInfoEditPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.mypageBenefitWrite}
            element={
              <ProtectedRoute requiredAdmin={'true'}>
                <MyPageBenefitWrite />
              </ProtectedRoute>
            }
          />
          <Route path={routes.error} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
