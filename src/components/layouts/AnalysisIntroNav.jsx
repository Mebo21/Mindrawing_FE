import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // useNavigate import

const AnalysisIntroNav = () => {
  const [isChecked, setIsChecked] = useState(false); // 체크박스 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 호출

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // 버튼 클릭 시 페이지 이동 처리
  const handleStartClick = () => {
    if (isChecked) {
      navigate('/analysis-input'); // /analysis-input 페이지로 이동
    }
  };

  return (
    <ConsentWrapper>
      <CheckboxLabel>
        <CheckboxIcon onClick={handleCheckboxChange}>
          {isChecked ? <FaCheckSquare size={18} color="#7469b6" /> : <FaRegSquare size={18} />}
        </CheckboxIcon>
        <span className="agreeText">입력 개인정보 AI 학습 활용 동의</span> <span className="star">*</span>
      </CheckboxLabel>
      <StartButton disabled={!isChecked} isChecked={isChecked} onClick={handleStartClick}>
        그림 심리분석 시작하기
      </StartButton>
    </ConsentWrapper>
  );
};

const ConsentWrapper = styled.div`
  height: 130px;
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1); /* 위쪽 방향의 그림자 */
`;

const CheckboxLabel = styled.label`
  display: flex;
  margin-bottom: 10px;

  .agreeText {
    margin-left: 10px;
    font-size: 14px;
    text-decoration: underline;
    font-weight: bold;
  }

  .star {
    margin-left: 5px;
    color: red;
    text-decoration: none;
  }
`;

const CheckboxIcon = styled.div`
  cursor: pointer;
`;

const StartButton = styled.button`
  width: 320px;
  height: 40px;
  background-color: ${({ isChecked }) => (isChecked ? '#7469b6' : '#C9C9C9')};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ isChecked }) => (isChecked ? 'pointer' : 'not-allowed')};
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isChecked }) => (isChecked ? '#5a51a3' : '#C9C9C9')};
  }
`;

export default AnalysisIntroNav;
