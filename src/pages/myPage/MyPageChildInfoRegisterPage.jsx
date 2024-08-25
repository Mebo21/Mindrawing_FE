import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from './../../components/layouts/Nav';
import Header from './../../components/layouts/Header';

const MyPageChildInfoRegisterPage = () => {
  return (
    <PageTemplate>
      <Header title="아이정보 등록" />
      <Nav currentPage="myPage" />
    </PageTemplate>
  );
};

export default MyPageChildInfoRegisterPage;
