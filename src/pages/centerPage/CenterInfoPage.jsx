import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from '../../components/layouts/Nav';
import { AiOutlineLeft } from 'react-icons/ai';
import sampleImage from '../../assets/images/Sample_image.png';
import routes from '../../constant/routes';

const CenterInfoPage = () => {
  const navigate = useNavigate();

  const [userLocation, setUserLocation] = useState({ lat: 35.1786, lng: 126.9012 });

  useEffect(() => {
    const container = document.getElementById('map'); // id를 'mapContainer'로 변경
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
      {/* 상단 이미지 및 뒤로가기 버튼 영역 */}
      <ImageHeader>
        <BackButton onClick={() => navigate(-1)}>
          <AiOutlineLeft size={24} />
        </BackButton>
        <CenterImage src={sampleImage} alt="센터 이미지" />
      </ImageHeader>
      <Divider />

      {/* 센터 정보 영역 */}
      <InfoContainer>
        <CenterContainer>
          <CenterNameContainer>
            <CenterName>용봉 아동 심리센터</CenterName>
            <OpenDiv>영업중</OpenDiv>
          </CenterNameContainer>
          <CenterInfo>
            <p>주소 : 광주광역시 북구 용주로 30번길 66</p>
            <p>전화번호 : 010-0000-0000</p>
            <p>영업시간 : 09:00-18:00</p>
          </CenterInfo>
          <ButtonContainer>
            <ViewMoreButton onClick={() => navigate(routes.centerList)}>다른 곳 둘러보기</ViewMoreButton>
            <BookButton onClick={() => navigate('/centers/1/reservation')}>예약하기</BookButton>
          </ButtonContainer>
        </CenterContainer>
        <Divider />

        {/* 카카오 맵 표시 영역 */}
        <MapContainer>
          <MapTitle>상세 위치</MapTitle>
          <Map id="map"></Map>
          <MapPadding />
        </MapContainer>
      </InfoContainer>
      <Nav currentPage="centerListPage" />
    </PageTemplate>
  );
};

// 스타일 정의
const ImageHeader = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  background-color: #e1dcfe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CenterImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f1f4f9;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 340px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CenterContainer = styled.div`
  padding: 20px;
`;

const CenterNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CenterName = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const OpenDiv = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  background-color: #8eff8b;
  border-radius: 10px;
  font-size: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const CenterInfo = styled.div`
  font-size: 16px;
  color: black;
  margin-top: 10px;

  p {
    margin: 5px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const ViewMoreButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #e6e6fa;
  border: none;
  border-radius: 10px;
  color: #7469b6;
  font-size: 14px;
  font-family: 'Pretendard', 'sans-serif';
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #d2cef5;
  }
`;

const BookButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #7469b6;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-family: 'Pretendard', 'sans-serif';
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #5a51a3;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const MapTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 10px;
`;

const Map = styled.div`
  width: 340px;
  height: 360px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: 0 auto;
`;

const MapPadding = styled.div`
  width: 100%;
  height: 40px;
`;

export default CenterInfoPage;
