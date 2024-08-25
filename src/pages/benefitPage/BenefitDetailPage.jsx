import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import { useQuery } from '@tanstack/react-query';
import Nav from '../../components/layouts/Nav';
import Header from './../../components/layouts/Header';

const BenefitDetailPage = () => {
  return (
    <PageTemplate>
      <Header title="육아 혜택 정보" />
      <Nav />
    </PageTemplate>
  );
};

export default BenefitDetailPage;
