import React, { useState } from 'react';
import styled from 'styled-components';
import sampleImage from '../../assets/images/Sample_image.png';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // FaHeart 추가

const CenterItem = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false); // 좋아요 상태 관리

  const toggleFavorite = (e) => {
    e.stopPropagation(); // 하트 클릭 시 센터 상세 페이지로 이동 방지
    setIsFavorite(!isFavorite); // 상태 토글
  };

  return (
    <CenterItemWrapper onClick={() => navigate('/centers/1')}>
      <ImageWrapper>
        <Image src={sampleImage} alt="센터 사진" />
      </ImageWrapper>
      <CenterLeftItemInfo>
        <Title>용봉 아동 심리센터</Title>
        <Address>광주광역시 북구 용주로 30번길 66</Address>
        <PhoneNumber>전화번호 : 010-0000-0000</PhoneNumber>
        <Info>영업시간 : 09:00 - 18:00</Info>
      </CenterLeftItemInfo>
      <CenterRightItemInfo>
        <HeartIcon onClick={toggleFavorite}>
          {isFavorite ? <FaHeart color="red" size={30} /> : <FaRegHeart size={30} />}
        </HeartIcon>
        <OpenDiv>영업중</OpenDiv>
      </CenterRightItemInfo>
    </CenterItemWrapper>
  );
};

// 스타일 정의
const CenterItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const CenterLeftItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CenterRightItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end; /* 오른쪽 정렬 */
  padding: 10px 0;
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

const OpenDiv = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  background-color: #8eff8b;
  border-radius: 10px;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const HeartIcon = styled.div`
  cursor: pointer;
`;

export default CenterItem;
