import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Loader from '../../components/layouts/Loader';
import Nav from '../../components/layouts/Nav';
import CenterItem from './../../components/layouts/CenterItem'; // 센터 아이템 컴포넌트
import { TbGpsFilled } from 'react-icons/tb';

const CenterListPage = () => {
  // 기본 좌표: 서울
  const [userLocation, setUserLocation] = useState({ lat: 37.566826, lng: 126.9786567 });

  useEffect(() => {
    // 사용자 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('GPS를 불러오는데 실패했습니다.', error);
        },
      );
    } else {
      console.error('Geolocation을 사용할 수 없습니다.');
    }
  }, []);

  useEffect(() => {
    const container = document.getElementById('mapContainer'); // id를 'mapContainer'로 변경
    const options = {
      center: new kakao.maps.LatLng(userLocation.lat, userLocation.lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 사용자 위치에 마커 추가
    const markerPosition = new kakao.maps.LatLng(userLocation.lat, userLocation.lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [userLocation]);

  return (
    <PageTemplate>
      <Header>
        <HeaderText>주변 센터 목록</HeaderText>
        <SearchBarWrapper>
          <SearchInput placeholder="ex. 광주광역시 북구 용주로 30번길 74" />
          <GpsIconWrapper>
            <TbGpsFilled size={25} />
          </GpsIconWrapper>
        </SearchBarWrapper>
      </Header>
      <MapContainer id="mapContainer"></MapContainer> {/* id 변경 */}
      <Divider />
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

// 스타일 정의
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 아래 방향의 그림자 */
`;

const HeaderText = styled.h1`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

const SearchBarWrapper = styled.div`
  position: relative; /* 아이콘을 입력 필드 안에 넣기 위한 상대 위치 */
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 10px 40px 10px 40px; /* 아이콘을 위한 패딩 */
  font-size: 14px;
  outline: none;
`;

const GpsIconWrapper = styled.div`
  position: absolute;
  left: 10px; /* 왼쪽에 아이콘 배치 */
  top: 55%;
  transform: translateY(-50%); /* 수직 중앙 정렬 */
`;

const MapContainer = styled.div`
  width: 100%;
  height: 360px;
  background-color: #f1f4f9;
`;

const Divider = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f1f4f9;
`;

const CenterItemsContainer = styled.div`
  padding: 0 20px;
  height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default CenterListPage;
