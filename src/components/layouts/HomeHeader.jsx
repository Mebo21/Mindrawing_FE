import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import { FaBell } from 'react-icons/fa';

const HomeHeader = () => {
  return (
    <>
      <HeaderBar>
        <HeaderLeftDiv>
          <img src={logo} alt="logo" />
          <HeaderText>마인드로잉</HeaderText>
        </HeaderLeftDiv>
        <FaBell size="25" />
      </HeaderBar>
    </>
  );
};

// HeaderBar 컴포넌트 정의
const HeaderBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff; /* 헤더바 배경 */
  border-bottom: 2px solid #c9c9c9; /* 하단 1px 보더 */
  padding: 10px; /* 내부 패딩 */
  display: flex;
  justify-content: space-between; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const HeaderLeftDiv = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000; /* 글자색 */
  margin-left: 10px;
`;

export default HomeHeader;
