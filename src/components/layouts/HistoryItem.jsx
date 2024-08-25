import React from 'react';
import styled from 'styled-components';
import sampleImage from '../../assets/images/Sample_image.png';
import { useNavigate } from 'react-router-dom';

const HistoryItem = () => {
  const navigate = useNavigate();

  return (
    <HistoryItemWrapper onClick={() => navigate('/analysis-detail/1')}>
      <ImageWrapper>
        <Image src={sampleImage} alt="HTP 검사 이미지" />
      </ImageWrapper>
      <HistoryInfo>
        <Title>HTP 검사</Title>
        <Date>검사날짜 : 2024.08.20 14:32</Date>
        <PhoneNumber>전화번호 : 010-0000-0000</PhoneNumber>
        <Info>아이 나이 7살 | 아이 성별 남자 | 아이 이름 금쪽이</Info>
      </HistoryInfo>
    </HistoryItemWrapper>
  );
};

const HistoryItemWrapper = styled.div`
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

const HistoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Date = styled.p`
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

export default HistoryItem;
