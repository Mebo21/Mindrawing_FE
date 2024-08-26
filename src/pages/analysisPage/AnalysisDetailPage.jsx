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
  const { id } = useParams(); // 주소에서 id 값을 가져옴

  // useQuery를 객체 형태로 호출
  const { data, isLoading, error } = useQuery({
    queryKey: ['analysisResult', id],
    queryFn: () => getAnalysisResult(id),
  });

  // 객체 확인용
  // useEffect(() => {
  //   console.log(data);
  //   console.log(data.data);
  //   console.log(data.data.house);
  // }, [data]);

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

  // 각 이미지를 렌더링하고 설명을 표시하는 함수
  const renderAnalysisSection = (title, imageSrc, results) => (
    <AnalysisSection>
      <h2>{title}</h2>
      <ImageWrapper>
        <ResultImage src={`${import.meta.env.VITE_AI_API_URL}/${imageSrc}`} alt={title} />
      </ImageWrapper>
      {results.map(
        (result, index) => result.correct_answer && <DetailText key={index}>{result.correct_answer}</DetailText>,
      )}
    </AnalysisSection>
  );

  return (
    <PageTemplate>
      <Header>
        <HeaderText>그림 심리분석 결과</HeaderText>
      </Header>
      <AnalysisResultContainer>
        {data?.data?.house &&
          renderAnalysisSection(
            '아이가 그린 H(House) 그림의 심리 분석 결과',
            data.data.house.image,
            data.data.house.results,
          )}
        {data?.data?.tree &&
          renderAnalysisSection(
            '아이가 그린 T(Tree) 그림의 심리 분석 결과',
            data.data.tree.image,
            data.data.tree.results,
          )}
        {data?.data?.person &&
          renderAnalysisSection(
            '아이가 그린 P(Person) 그림의 심리 분석 결과',
            data.data.person.image,
            data.data.person.results,
          )}
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
  font-size: 14px;
  margin-bottom: 10px;
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
