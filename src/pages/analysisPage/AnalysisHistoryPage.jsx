import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from '../../components/layouts/Nav';
import HistoryItem from '../../components/layouts/HistoryItem';
import Loader from '../../components/layouts/Loader';
import { useQuery } from '@tanstack/react-query';

const AnalysisHistoryPage = () => {
  return (
    <PageTemplate>
      <Header>
        <HeaderText>그림 심리분석 내역</HeaderText>
      </Header>
      <HistoryContainer>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </HistoryContainer>
      <Nav currentPage="analysisHistoryPage" />
    </PageTemplate>
  );
};

// 스타일 정의
const Header = styled.div`
  width: 360px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const HistoryContainer = styled.div`
  margin-top: 60px;
  padding: 0 20px;
  height: 640px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default AnalysisHistoryPage;
