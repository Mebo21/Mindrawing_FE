import React from 'react';
import styled from 'styled-components';
import Header from '../../components/layouts/Header';
import PageTemplate from '../../components/templates/PageTemplate';
import AnalysisIntroNav from '../../components/layouts/AnalysisIntroNav';
import HTPImage from '../../assets/images/HTP_intro1.png';
import HImage from '../../assets/images/HTP_intro2.png';
import TImage from '../../assets/images/HTP_intro3.png';
import PImage from '../../assets/images/HTP_intro4.png';
const AnalysisIntroPage = () => {
  return (
    <PageTemplate>
      <Header title="그림심리분석 소개" />
      <ContentWrapper>
        <QuestionTitle>Q. HTP 검사는 무엇인가요?</QuestionTitle>
        <ImageWrapper>
          <HTPImg src={HTPImage} alt="HTP 검사 이미지" />
        </ImageWrapper>
        <Description>
          <p>
            <strong>'HTP 검사’</strong>는 ‘House-Tree-Person’의 약자로,{' '}
            <strong>집(House), 나무(Tree), 사람(Person)</strong>을 그려보는 심리 검사예요. 이 검사는 주로 사람들이
            무의식적으로 드러내는 생각이나 감정을 파악하기 위해 사용된답니다. 각 그림에 담긴 요소들, 예를 들어 집은
            가족과 관련된 생각이나 대인관계를, 나무는 자아의 바탕을 의미하고, 사람은 자아와 관련된 내면의 모습을
            상징하기도 해요.{' '}
          </p>
          <p>
            HTP 검사는 매우 간단하면서도 많은 정보를 알 수 있어서 성인뿐만 아니라 아이들에게도 자주 사용된답니다. 그림을
            그릴 때, 그 사람이 어떤 색깔을 선택했는지, 그림의 크기나 위치, 세부적인 디테일까지 모두 중요한 단서가 될 수
            있어요. 이런 요소들을 통해 마음 깊은 곳에 있는 감정이나 생각들을 좀 더 잘 이해할 수 있게 도와준답니다.{' '}
          </p>
          <p>
            이 검사는 꼭 잘 그리거나 예술적인 그림이 필요한 게 아니에요. 그냥 마음 편히 자신을 표현하는 것이 가장
            중요해요. HTP 검사를 통해 스스로도 몰랐던 감정이나 생각을 알게 되는 과정이 될 수 있답니다. 이렇게 자기
            자신을 알아가는 데 도움을 줄 수 있는 매우 효과적이고 유용한 심리 검사예요.
          </p>
        </Description>
        <ImageWrapper>
          <HTPImg src={HImage} alt="HTP 검사 - 집 이미지" />
        </ImageWrapper>
        <Description>
          <p>
            집을 그리는 과정에서 우리는 그 사람의 가족관계나 대인관계에 대해 알 수 있어요. 집은 가정과 가족을 상징하기
            때문에, 집을 그리는 방식이나 세부적인 요소들이 그 사람의 가정에서의 역할, 안정감, 또는 가족과의 정서적인
            연결을 보여줍니다.
          </p>
          <p>
            <strong>집의 크기나 위치 : </strong> 너무 작은 집은 가정 내에서의 위축된 느낌을, 너무 큰 집은 지나친 방어나
            자기 과시를 나타낼 수 있어요. <br />
            <strong>창문과 문 : </strong> 집의 문이나 창문이 열려 있으면 외부와의 소통이 원활하다는 의미일 수 있고, 닫혀
            있거나 매우 작다면 사람들과의 소통이 어렵거나 단절된 상태일 수 있죠. <br />
            <strong>벽이나 지붕 : </strong> 벽은 방어 기제를, 지붕은 그 사람의 사고나 정신세계를 상징하는데, 너무
            튼튼하거나 강하게 표현된 경우는 강한 방어기제나 가족과의 갈등을 암시할 수도 있어요.
          </p>
          <p>
            이렇듯, 집을 그리는 방식 하나하나가 그 사람의 가정 환경과 관련된 심리 상태를 보여주는 중요한 단서가
            된답니다.
          </p>
        </Description>
        <ImageWrapper>
          <HTPImg src={TImage} alt="HTP 검사 - 나무 이미지" />
        </ImageWrapper>
        <Description>
          <p>
            나무는 자아와 성장 과정을 상징하는데요, 나무를 통해 우리는 그 사람이 스스로를 어떻게 인식하는지, 그리고 어떤
            성격적 특성을 가지고 있는지 볼 수 있어요. 나무는 자연스럽게 자라고 변화하는 존재이기 때문에, 이 그림은 그
            사람의 자아 형성 과정이나 내면적인 안정감, 혹은 불안정성을 반영하기도 합니다.
          </p>
          <p>
            <strong>뿌리 : </strong>나무의 뿌리는 그 사람의 기초적 자아나 안정감을 의미해요. 뿌리가 깊고 튼튼하게
            그려지면 자아가 안정적일 가능성이 높고, 반대로 뿌리가 얕거나 불안정하게 그려지면 자아가 불안하거나 불확실한
            상태일 수 있죠. <br />
            <strong>줄기 : </strong> 줄기는 자아의 중심을 의미하며, 너무 가늘거나 굽어 있는 줄기는 그 사람이 자아가
            약하거나 내면적으로 불안할 수 있다는 신호일 수 있어요. 반면, 굵고 곧은 줄기는 자아의 안정감과 자신감을
            나타내죠. <br />
            <strong>가지와 잎 : </strong> 가지와 잎은 그 사람의 사회적 관계나 발달 상태를 반영해요. 가지가 많고 건강하게
            뻗어 있으면 그 사람의 대인 관계가 활발하고 긍정적일 가능성이 큽니다. 반대로 가지가 부러지거나 잎이 없는
            나무는 사회적 관계에서의 어려움이나 외로움을 나타낼 수 있죠.
          </p>
        </Description>
        <ImageWrapper>
          <HTPImg src={PImage} alt="HTP 검사 - 사람 이미지" />
        </ImageWrapper>
        <Description>
          <p>
            사람 그림은 자신의 모습을 상징하는 가장 직접적인 요소예요. 이 그림을 통해 그 사람의 자존감, 대인관계, 자신을
            어떻게 인식하는지에 대해 깊이 있는 정보를 얻을 수 있죠.
          </p>
          <p>
            <strong>사람의 크기 : </strong> 너무 작게 그려진 사람은 자기 위축이나 열등감을, 반대로 너무 크게 그려진
            사람은 과장된 자아나 과시적인 성향을 나타낼 수 있어요.
            <br />
            <strong>얼굴 표현 : </strong>
            눈, 입, 코 같은 얼굴 요소들은 그 사람이 자신의 감정을 어떻게 표현하는지 보여줍니다. 눈이 크거나 강조되어
            있다면 다른 사람에게 자신을 보여주고 싶은 욕구나 불안이 있을 수 있어요. 반면, 눈이 생략되거나 작게 그려진
            경우는 타인과의 소통을 피하거나 자신을 숨기고 싶어하는 마음일 수 있죠.
            <br />
            <strong>옷차림과 몸의 표현 : </strong> 옷이나 신체의 비율도 중요한데, 신체를 세밀하게 그리거나 옷을 과하게
            장식하는 경우는 외모에 대한 집착이나 다른 사람의 시선을 중요하게 생각하는 마음을 나타낼 수 있어요.
          </p>
        </Description>
        <QuestionTitle>이제 그럼 HTP 검사를 시작해볼까요?😉</QuestionTitle>
        <Description></Description>
      </ContentWrapper>
      <AnalysisIntroNav />
    </PageTemplate>
  );
};

// 스타일 정의
const ContentWrapper = styled.div`
  width: 360px;
  height: 610px;
  overflow-y: auto;

  /* 스크롤바 스타일 */
  /* 그냥 안보이게 하는걸로 결정 */
  &::-webkit-scrollbar {
    display: none;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const QuestionTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const HTPImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  font-size: 14px;
  padding: 0 10px 0 10px;
  line-height: 1.4;
  text-align: justify;

  p {
    margin-top: 14px;
  }
`;

export default AnalysisIntroPage;
