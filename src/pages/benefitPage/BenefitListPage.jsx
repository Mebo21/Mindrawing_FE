import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import { useQuery } from '@tanstack/react-query';
import Nav from '../../components/layouts/Nav';

const BenefitListPage = () => {
  return (
    <PageTemplate>
      <Header>
        <HeaderText>육아 혜택 정보 모음</HeaderText>
      </Header>
      <Nav />
    </PageTemplate>
  );
};

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

export default BenefitListPage;
