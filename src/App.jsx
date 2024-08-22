import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './constant/routes';
import Homepage from './pages/defaultPage/HomePage';
import LoginPage from './pages/defaultPage/LoginPage';
import RegisterPage from './pages/defaultPage/RegisterPage';
import AnalysisIntroPage from './pages/analysisPage/AnalysisIntroPage';
import AnalysisInputPage from './pages/analysisPage/AnalysisInputPage';
import AnalysisSummaryPage from './pages/analysisPage/AnalysisSummaryPage';
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
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.error} element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
