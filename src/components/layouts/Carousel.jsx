import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HTPImage from '../../assets/images/Carousel_Image1.png';

const Carousel = () => {
  // Slider 설정
  const settings = {
    dots: true, // 하단 점 (슬라이드 인디케이터)
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Caption도 필요하면 넣을 수 있음
  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        <Slide>
          <img src={HTPImage} alt="Slide 1" />
        </Slide>
        <Slide>
          <img src={HTPImage} alt="Slide 2" />
        </Slide>
        <Slide>
          <img src={HTPImage} alt="Slide 3" />
        </Slide>
        <Slide>
          <img src={HTPImage} alt="Slide 3" />
        </Slide>
        <Slide>
          <img src={HTPImage} alt="Slide 3" />
        </Slide>
      </StyledSlider>
    </CarouselWrapper>
  );
};

// 스타일 정의
const CarouselWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto; /* 가운데 정렬 */
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 15px; /* 점을 캐러셀 슬라이드 내부로 */
  }
  .slick-dots li button:before {
    font-size: 12px; /* 점 크기 조정 */
    color: #7469b6; /* 점 색상 변경 */
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #7469b6; /* 활성화된 점 색상 */
  }
`;

const Slide = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

// const Caption = styled.div`
//   text-align: center;
//   font-size: 16px;
//   font-weight: bold;
//   margin-top: 10px;
// `;

export default Carousel;
