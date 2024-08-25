import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import sampleImage from '../../assets/images/Sample_Image.png';
import Header from '../../components/layouts/Header';
import { useNavigate } from 'react-router-dom';
import routes from '../../constant/routes';

const AnalysisDetailPage = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <Header title="그림 심리분석 상세 설명" />
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
          <AnalysisSection>
            <h2>아이가 그린 T(Tree) 그림의 심리 분석 결과</h2>
            <ImageWrapper>
              <ResultImage src={sampleImage} alt="Tree Drawing" />
            </ImageWrapper>
            <DetailText>창문: ~~~</DetailText>
            <DetailText>문: ~~~</DetailText>
            <DetailText>굴뚝: ~~~</DetailText>
          </AnalysisSection>
          <AnalysisSection>
            <h2>아이가 그린 P(Person) 그림의 심리 분석 결과</h2>
            <ImageWrapper>
              <ResultImage src={sampleImage} alt="Tree Drawing" />
            </ImageWrapper>
            <DetailText>창문: ~~~</DetailText>
            <DetailText>문: ~~~</DetailText>
            <DetailText>굴뚝: ~~~</DetailText>
          </AnalysisSection>
        </AnalysisResultWrapper>
      </AnalysisResultContainer>
      <NavContainer>
        <CenterNavButton onClick={() => navigate(routes.centerList)}>센터 목록 페이지로 이동하기</CenterNavButton>
        <HomeNavButton onClick={() => navigate(routes.home)}>홈으로 돌아가기</HomeNavButton>
      </NavContainer>
    </PageTemplate>
  );
};

export default AnalysisDetailPage;

// 스타일 정의

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
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
