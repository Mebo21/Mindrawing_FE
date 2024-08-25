import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import Nav from '../../components/layouts/Nav';
import { useQuery } from '@tanstack/react-query';

const CenterReservationPage = () => {
  return (
    <PageTemplate>
      <Nav currentPage="centerListPage" />
    </PageTemplate>
  );
};

export default CenterReservationPage;
