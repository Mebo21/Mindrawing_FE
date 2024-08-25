import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader'; // Assuming you have a Loader component
import sampleImage from '../../assets/images/Sample_Image.png';
import routes from '../../constant/routes';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AnalysisSummaryPage = () => {
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const navigate = useNavigate();

  useEffect(() => {
    // 5초 후 로딩 완료
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // 컴포넌트가 언마운트될 때 타이머를 정리해줍니다.
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      Swal.fire({
        title: '그림 심리분석이 완료되었습니다!',
        icon: 'success',
        showConfirmButton: true,
        timer: 2000, // 2초 뒤에 사라지도록 설정
        confirmButtonText: '확인',
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <PageTemplate>
        <Loader /> {/* 로딩 중일 때 보여줄 Loader 컴포넌트 */}
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      <Header>그림 심리분석 요약</Header>
      <AnalysisResultContainer>
        <AnalysisResultWrapper>
          <AnalysisSection>
            <h2>아이가 그린 H(House) 그림의 심리 분석 결과</h2>
            <ImageWrapper>
              <ResultImage src={sampleImage} alt="House Drawing" />
            </ImageWrapper>
            <DetailText>창문: ~~~</DetailText>
            <DetailText>문: ~~~</DetailText>
            <DetailText>굴뚝: ~~~</DetailText>
          </AnalysisSection>
          <AnalysisIntroText>
            나머지 결과도 자세히 보고 싶다면, <br />
            <strong>그림 심리분석 상세 결과 확인하기</strong>를 눌러주세요!
          </AnalysisIntroText>
        </AnalysisResultWrapper>
      </AnalysisResultContainer>
      <NavContainer>
        <CenterNavButton onClick={() => navigate(routes.analysisDetail)}>
          그림 심리분석 상세 결과 확인하기
        </CenterNavButton>
        <HomeNavButton onClick={() => navigate(routes.home)}>홈으로 돌아가기</HomeNavButton>
      </NavContainer>
    </PageTemplate>
  );
};

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const AnalysisResultContainer = styled.div`
  width: 100%;
  height: 590px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AnalysisResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AnalysisSection = styled.div`
  margin: 10px 0;
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const AnalysisIntroText = styled.p`
  font-size: 15px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const ResultImage = styled.img`
  width: 100%;
  border: 5px solid #7469b6;
  border-radius: 10px;
`;

const DetailText = styled.p`
  font-size: 16px;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
`;

const CenterNavButton = styled.button`
  width: 320px;
  height: 40px;
  background-color: #ad88c6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'Pretendard', 'sans-serif';
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #9668b0;
  }
`;

const HomeNavButton = styled.button`
  width: 320px;
  height: 40px;
  background-color: #7469b6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'Pretendard', 'sans-serif';
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5a51a3;
  }
`;

export default AnalysisSummaryPage;
