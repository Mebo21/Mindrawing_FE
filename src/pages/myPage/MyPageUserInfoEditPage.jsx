import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from './../../components/layouts/Nav';
import Header from './../../components/layouts/Header';

const MyPageUserInfoEditPage = () => {
  return (
    <PageTemplate>
      <Header title="개인정보 수정" />
      <Nav currentPage="myPage" />
    </PageTemplate>
  );
};

export default MyPageUserInfoEditPage;
