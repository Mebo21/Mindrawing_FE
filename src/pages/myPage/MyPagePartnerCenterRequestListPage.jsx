import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import { useQuery } from '@tanstack/react-query';
import Nav from './../../components/layouts/Nav';
import Header from './../../components/layouts/Header';

const MyPagePartnerCenterRequestListPage = () => {
  return (
    <PageTemplate>
      <Header title="제휴센터 신청 등록 요청 관리" />
      <Nav currentPage="myPage" />
    </PageTemplate>
  );
};

export default MyPagePartnerCenterRequestListPage;
