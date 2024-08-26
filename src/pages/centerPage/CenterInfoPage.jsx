import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import Nav from '../../components/layouts/Nav';
import { useQuery } from '@tanstack/react-query';

const CenterInfoPage = () => {
  return (
    <PageTemplate>
      {/* 이미지 & 뒤로가기 버튼이 있는 영역 */}
      {/* 구분선 */}
      {/* 센터 상세 정보 영역 */}
      {/* 구분선 */}
      {/* 상세 위치(카카오 맵 API 코드 활용, 마커 하나 ) */}
      <Nav currentPage="centerListPage" />
    </PageTemplate>
  );
};

export default CenterInfoPage;
