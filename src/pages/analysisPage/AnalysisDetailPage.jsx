import React, { useEffect } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import routes from '../../constant/routes';
import Loader from '../../components/layouts/Loader';
import { getAnalysisResult } from '../../apis/analysis';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AnalysisDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 주소에서 param 값을 가져옴

  // useQuery를 객체 형태로 호출
  const { data, isLoading, error } = useQuery({
    queryKey: ['analysisResult', id],
    queryFn: () => getAnalysisResult(id),
  });

  useEffect(() => {
    console.log(id);
  }, []);

  if (isLoading) {
    return (
      <PageTemplate>
        <Loader description="그림심리분석 결과를 불러오는 중이에요!!😘" /> {/* 로딩 중일 때 Loader 표시 */}
      </PageTemplate>
    );
  }

  if (error) {
    navigate(routes.error);
  }

  return (
    <PageTemplate>
      <Header>
        <HeaderText>그림 심리분석 결과</HeaderText>
      </Header>
      <AnalysisResultContainer></AnalysisResultContainer>
      <NavContainer>
        <CenterNavButton onClick={() => navigate(routes.centerList)}>센터 목록 페이지로 이동하기</CenterNavButton>
        <HomeNavButton onClick={() => navigate(routes.home)}>홈으로 돌아가기</HomeNavButton>
      </NavContainer>
    </PageTemplate>
  );
};

export default AnalysisDetailPage;

// 스타일 정의
const Header = styled.div`
  width: 360px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1`
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
