import React from 'react';
import styled from 'styled-components';
import sampleImage from '../../assets/images/Sample_image.png';
import { useNavigate } from 'react-router-dom';

const CenterItem = () => {
  const navigate = useNavigate();

  return (
    <CenterItemWrapper onClick={() => navigate('/centers/1')}>
      <ImageWrapper>
        <Image src={sampleImage} alt="센터 사진" />
      </ImageWrapper>
      <CenterItemInfo>
        <Title>용봉 아동 심리센터</Title>
        <Address>광주광역시 북구 용주로 30번길 66</Address>
        <PhoneNumber>전화번호 : 010-0000-0000</PhoneNumber>
        <Info>영업시간 : 09:00 - 18:00</Info>
      </CenterItemInfo>
    </CenterItemWrapper>
  );
};

const CenterItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 25px 0;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100px; /* 고정 너비 */
  height: 100px;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const CenterItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Address = styled.p`
  font-size: 10px;
  margin-bottom: 4px;
`;

const PhoneNumber = styled.p`
  font-size: 10px;
  margin-bottom: 4px;
`;

const Info = styled.p`
  font-size: 10px;
`;

export default CenterItem;
