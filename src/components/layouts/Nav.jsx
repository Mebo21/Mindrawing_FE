import React from 'react';
import styled from 'styled-components';
import routes from '../../constant/routes';
import { FaHome } from 'react-icons/fa'; // Home 아이콘
import { FaUserAlt } from 'react-icons/fa'; // User 아이콘
import { FaClipboardList } from 'react-icons/fa'; // Clipboard 아이콘
import { FaPalette } from 'react-icons/fa'; // Palette 아이콘
import { FaSearch } from 'react-icons/fa'; // Search 아이콘
import { Link } from 'react-router-dom'; // React Router Link

const Nav = ({ currentPage }) => {
  return (
    <NavContainer>
      <NavItem>
        <StyledLink to={routes.analysisIntro}>
          <FaPalette color={currentPage === 'analysisPage' ? '#7469B6' : '#D3D3D3'} size={32} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={routes.analysisHistory}>
          <FaClipboardList color={currentPage === 'analysisHistoryPage' ? '#7469B6' : '#D3D3D3'} size={32} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={routes.home}>
          <FaHome color={currentPage === 'homePage' ? '#7469B6' : '#D3D3D3'} size={32} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={routes.centerList}>
          <FaSearch color={currentPage === 'centerListPage' ? '#7469B6' : '#D3D3D3'} size={32} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={routes.mypage}>
          <FaUserAlt color={currentPage === 'myPage' ? '#7469B6' : '#D3D3D3'} size={32} />
        </StyledLink>
      </NavItem>
    </NavContainer>
  );
};

// 스타일 정의
const NavContainer = styled.div`
  width: 360px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1); /* 위쪽 방향의 그림자 */
  position: fixed;
  bottom: 0;
`;

const NavItem = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Nav;
