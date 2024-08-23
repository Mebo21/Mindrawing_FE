import React from 'react';
import styled from 'styled-components';
import PageTemplate from './../../components/templates/PageTemplate';
import HomeHeader from './../../components/layouts/HomeHeader';
import Nav from '../../components/layouts/Nav';
import Carousel from '../../components/layouts/Carousel';

const HomePage = () => {
  return (
    <PageTemplate>
      <HomeHeader />
      <ScrollableContent>
        <Carousel />
      </ScrollableContent>
      <Nav currentPage="homePage" />
    </PageTemplate>
  );
};

const ScrollableContent = styled.div`
  width: 100%;
  height: 660px;
  overflow-y: auto; /* 세로 스크롤 활성화 */

  /* 스크롤바 스타일 */
  /* 그냥 안보이게 하는걸로 결정 */
  &::-webkit-scrollbar {
    display: none;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default HomePage;
