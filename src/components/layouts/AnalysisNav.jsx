import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AnalysisNav = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/analysis-intro');
  };

  const handleNext = () => {
    navigate('/analysis-summary');
  };

  return (
    <NavContainer>
      <NavButton className="previousButton" onClick={handlePrevious} previous>
        <IoIosArrowBack size={20} className="icon-left" />
        <span>이전</span>
      </NavButton>
      <NavButton primary onClick={handleNext}>
        <span>다음</span>
        <IoIosArrowForward size={20} className="icon-right" />
      </NavButton>
    </NavContainer>
  );
};

export default AnalysisNav;

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 0 25px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Pretendard', 'sans-serif';
  cursor: pointer;
  position: relative;

  /* 스타일 조건부 변경 */
  background-color: ${(props) => (props.primary ? '#8B73D2' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#8B73D2')};
  border: ${(props) => (props.primary ? 'none' : '1px solid #8B73D2')};

  span {
    /* 텍스트가 중앙에 위치하도록 */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* 좌측 화살표 아이콘 위치 조정 */
  .icon-left {
    position: absolute;
    left: 15px;
  }

  /* 우측 화살표 아이콘 위치 조정 */
  .icon-right {
    position: absolute;
    right: 15px;
  }
`;
