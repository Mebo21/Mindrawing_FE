import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import Nav from '../../components/layouts/Nav';
import { useQuery } from '@tanstack/react-query';
import CenterItem from './../../components/layouts/CenterItem';

const CenterListPage = () => {
  return (
    <PageTemplate>
      {/* width : 360px height : 100px 주변센터목록 상단 */}
      {/* 카카오맵 API */}
      {/* 구분선 */}
      <CenterItemsContainer>
        <CenterItem />
        <CenterItem />
        <CenterItem />
        <CenterItem />
        <CenterItem />
      </CenterItemsContainer>
      <Nav currentPage="centerListPage" />
    </PageTemplate>
  );
};

const CenterItemsContainer = styled.div`
  margin-top: 60px;
  padding: 0 20px;
  height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default CenterListPage;
