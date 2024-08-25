import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/layouts/Nav';
import benefit_card1 from '../../assets/images/benefit_card1.png';
import benefit_card2 from '../../assets/images/benefit_card2.png';
import benefit_card3 from '../../assets/images/benefit_card3.png';
import benefit_card4 from '../../assets/images/benefit_card4.png';

const BenefitListPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // navigate(`/benefits/${id}`);
    navigate(`/benefits/1`);
  };

  return (
    <PageTemplate>
      <Header>
        <HeaderText>육아 혜택 정보 모음</HeaderText>
      </Header>
      <CardContainer>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card1} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card2} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card3} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card4} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card1} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card2} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card3} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card4} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card1} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card2} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card3} alt="육아 혜택 이미지" />
        </Card>
        <Card onClick={() => handleCardClick()}>
          <CardImage src={benefit_card4} alt="육아 혜택 이미지" />
        </Card>
      </CardContainer>
      <Nav />
    </PageTemplate>
  );
};

// 스타일 정의

const Header = styled.div`
  width: 360px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 660px;
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(2, 1fr); /* 두 개의 열로 배치 */
  gap: 10px;
  padding: 20px;
  justify-items: center;
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
  }
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* hover시 약간 위로 이동 */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover; /* 이미지가 카드에 꽉 차도록 */
`;

export default BenefitListPage;
