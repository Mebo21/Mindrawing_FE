import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from '../../components/layouts/Nav';
import Header from '../../components/layouts/Header';
import benefit_card5 from '../../assets/images/benefit_card5.png'; // 이미지 파일 경로를 여기에 지정하세요

const BenefitDetailPage = () => {
  return (
    <PageTemplate>
      <Header title="육아 혜택 정보" />
      <ImageWrapper>
        <BenefitImage src={benefit_card5} alt="육아 혜택 이미지" />
      </ImageWrapper>
      <Divider />
      <TextWrapper>
        <Title>우리아이, 꼭 필요한 영양간식</Title>
        <Description>
          우리아이, 꼭 필요한 영양간식에 대해 아시나요? 힘이 없고 기력이 안좋아 쉽게 지치는 아이들, 튼튼한 것 같은데
          환절기에는 예외없이 감기를 달고 사는 아이들, 허약한 체질 때문인지 집중력이 약하고 산만한 아이들...집집마다
          아아이들 건강 때문에 엄마의 걱정이 끊이지 않는다.
          <br />
          그런 당신을 위한 소식! 키 크는데 도움을 주는 간식, 체력을 튼튼하게 하고 두뇌발달에 좋근 간식, 살찌지 않는
          저칼로리 간식, 편식하는 아이들을 위한 간식들이 소개되어 있다. 각 메뉴는 이 음식이 왜 성장에 좋은지 야무지게
          설명해두었다!
        </Description>
      </TextWrapper>
      <Nav />
    </PageTemplate>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const BenefitImage = styled.img`
  width: 100%;
  max-width: 340px;
  border-radius: 10px;
`;

const Divider = styled.div`
  width: 360px;
  height: 20px;
  background-color: #f1f4f9;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #333;
  text-align: justify;
`;

export default BenefitDetailPage;
