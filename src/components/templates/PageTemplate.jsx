// PageLayout.js
import styled from 'styled-components';

// PageLayout 컴포넌트 정의
const PageLayout = styled.div`
  width: 360px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff; /* 배경색 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 */
`;

export default PageLayout;
