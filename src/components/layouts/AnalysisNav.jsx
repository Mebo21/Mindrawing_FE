import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AnalysisNav = ({ isNextButtonEnabled }) => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/analysis-intro');
  };

  const handleNext = () => {
    if (isNextButtonEnabled) {
      navigate('/analysis-summary/1');
    }
  };

  return (
    <NavContainer>
      <NavButton className="previousButton" onClick={handlePrevious} previous>
        <IoIosArrowBack size={20} className="icon-left" />
        <span>이전</span>
      </NavButton>
      <NavButton primary onClick={handleNext} disabled={!isNextButtonEnabled} isenabled={isNextButtonEnabled}>
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
  position: relative;

  /* 이전 버튼 스타일 유지 */
  background-color: ${(props) => (props.previous ? 'white' : props.isenabled ? '#8B73D2' : '#C9C9C9')};
  color: ${(props) => (props.previous ? '#8B73D2' : 'white')};
  border: ${(props) => (props.previous ? '2px solid #8B73D2' : 'none')};
  cursor: ${(props) => (props.isenabled || props.previous ? 'pointer' : 'not-allowed')};

  transition: background-color 0.3s ease;

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .icon-left {
    position: absolute;
    left: 15px;
  }

  .icon-right {
    position: absolute;
    right: 15px;
  }

  &:disabled {
    pointer-events: none;
  }
`;
