import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    // 뒤로 갈 수 없는 경우 로그인 페이지로 리디렉션
    if (window.history.length > 1) {
      navigate(-1); // 이전 페이지가 있는 경우 이전 페이지로 이동
    } else {
      navigate('/login'); // 이전 페이지가 없는 경우 로그인 페이지로 이동
    }
  };  

  return (
    <HeaderContainer>
      <BackButton onClick={handleBack}>
        <IoIosArrowBack size={30} />
      </BackButton>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height : 60px;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const BackButton = styled.div`
    padding-top: 4px;
    cursor: pointer;
`;


export default Header;
