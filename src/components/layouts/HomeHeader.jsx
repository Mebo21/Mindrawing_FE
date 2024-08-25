import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import { FaBell } from 'react-icons/fa';
import NotificationModal from './../atoms/NotificationModel';

const HomeHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리

  const handleBellClick = () => {
    setModalOpen(true); // 모달 열기
  };

  const handleModalClose = () => {
    setModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <HeaderBar>
        <HeaderLeftDiv>
          <img src={logo} alt="logo" />
          <HeaderText>마인드로잉</HeaderText>
        </HeaderLeftDiv>
        {/* FaBell 아이콘을 스타일링한 StyledBellIcon으로 교체 */}
        <StyledBellIcon size="25" onClick={handleBellClick} isModalOpen={isModalOpen} />
      </HeaderBar>
      {isModalOpen && <NotificationModal onClose={handleModalClose} />} {/* 모달 표시 */}
    </>
  );
};

// FaBell 스타일링
const StyledBellIcon = styled(FaBell)`
  cursor: pointer; // 마우스를 올렸을 때 포인터로 변경
  color: ${(props) => (props.isModalOpen ? '#7469b6' : '#000')}; // 모달 상태에 따라 색상 변경
  &:hover {
    color: #7469b6; // 마우스를 올리면 색상 변경
  }
`;

// HeaderBar 컴포넌트 정의
const HeaderBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 2px solid #c9c9c9;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-left: 10px;
`;

export default HomeHeader;
