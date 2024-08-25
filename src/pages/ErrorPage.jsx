import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../components/templates/PageTemplate';
import errorImage from '../assets/images/Error_icon.png'; // 사전 준비한 이미지 경로를 사용

const ErrorPage = () => {
  const navigate = useNavigate();

  // 홈으로 이동하는 함수
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <PageTemplate>
      <ErrorContainer>
        <ErrorText>앗!!!!.... 😢</ErrorText>
        <ErrorSubtitle>알 수 없는 에러가 발생했어요</ErrorSubtitle>
        <ErrorImage src={errorImage} alt="에러 이미지" />
        <ErrorMessage>
          불편을 끼쳐드려 죄송해요.
          <br />
          아래 버튼을 눌러 홈으로 돌아가주세요!
        </ErrorMessage>
        <HomeButton onClick={handleGoHome}>홈으로 돌아가기</HomeButton>
      </ErrorContainer>
    </PageTemplate>
  );
};

// 스타일 정의
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  text-align: center;
`;

const ErrorText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ErrorSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ErrorImage = styled.img`
  width: 200px; /* 이미지 크기 설정 */
  height: 200px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const HomeButton = styled.button`
  background-color: #7469b6;
  color: white;
  border: none;
  width: 320px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a51a3;
  }
`;

export default ErrorPage;
