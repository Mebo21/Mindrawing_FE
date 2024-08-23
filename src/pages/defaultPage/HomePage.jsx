import React from 'react';
import styled from 'styled-components';
import PageTemplate from './../../components/templates/PageTemplate';
import HomeHeader from './../../components/layouts/HomeHeader';
import Nav from '../../components/layouts/Nav';
import Carousel from '../../components/layouts/Carousel';
import color_pallete_icon from '../../assets/images/color_palette.png';
import inspection_icon from '../../assets/images/Inspection.png';
import benefit_icon from '../../assets/images/benefit_info.png';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';

const HomePage = () => {
  return (
    <PageTemplate>
      <HomeHeader />
      <ScrollableContent>
        <Carousel />
        <AnalysisCardLayout>
          <StyledLink to={routes.analysisIntro}>
            <AnalysisCard>
              <div>
                <h1>심리 분석</h1>
                <p>
                  우리 아이의 심리상태를 <br />
                  그림을 통해 손쉽게 파악해보세요
                </p>
              </div>
              <div className="image-wrapper">
                <img src={color_pallete_icon} alt="color_pallete" />
              </div>
            </AnalysisCard>
          </StyledLink>
          <StyledLink to={routes.analysisHistory}>
            <AnalysisCard>
              <div>
                <h1>검사 기록</h1>
                <p>
                  지금까지 받은 검사 기록을 <br /> 한눈에 살펴볼 수 있어요
                </p>
              </div>
              <div className="image-wrapper">
                <img src={inspection_icon} alt="color_pallete" />
              </div>
            </AnalysisCard>
          </StyledLink>
        </AnalysisCardLayout>
        <ButtonCardLayout>
          <StyledLink to={routes.benefitList}>
            <ButtonCard to={routes.benefitList}>
              <text>육아 혜택 정보 확인하기</text>
              <IoIosArrowForward size={20} />
              <img src={benefit_icon} alt="benefit" />
            </ButtonCard>
          </StyledLink>
        </ButtonCardLayout>
      </ScrollableContent>
      <Nav currentPage="homePage" />
    </PageTemplate>
  );
};

const ScrollableContent = styled.div`
  width: 100%;
  height: 660px;
  overflow-y: auto; /* 세로 스크롤 활성화 */

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

const AnalysisCardLayout = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: #e1dcfe;
`;

// 각 버튼 스타일
const AnalysisCard = styled.div`
  width: 160px;
  height: 160px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: space-between;
  color: #000;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 10px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .image-wrapper {
    display: flex;
    justify-content: end;
  }
`;

const ButtonCardLayout = styled.div`
  width: 100%;
  height: 160px;
  padding: 10px;
  background-color: #ffffff;
`;

const ButtonCard = styled.div`
  width: 340px;
  height: 140px;
  background-color: #e1dcfe;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  text {
    font-size: 20px;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const MapContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

const Map = styled.div`
  width: 340px;
  height: 340px;
  border: 1px solid #ddd;
`;

export default HomePage;
