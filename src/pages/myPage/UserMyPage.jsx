import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import routes from '../../constant/routes';

const UserMyPage = () => {
  const navigate = useNavigate();
  return (
    <MenuList>
      <MenuItem onClick={() => navigate(routes.analysisHistory)}>
        그림 심리분석 내역 <IoIosArrowForward size={30} />
      </MenuItem>
      <MenuItem onClick={() => navigate(routes.mypageUserInfoEdit)}>
        개인정보 수정 <IoIosArrowForward size={30} />
      </MenuItem>
      <MenuItem onClick={() => navigate(routes.mypageChildInfoRegister)}>
        아이정보 등록 <IoIosArrowForward size={30} />
      </MenuItem>
      <MenuItem onClick={() => navigate(routes.mypagePartnerCenterRegister)}>
        제휴센터 등록 <IoIosArrowForward size={30} />
      </MenuItem>
    </MenuList>
  );
};

const MenuList = styled.ul`
  width: 360px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-size: 16px;
  border-bottom: 1px solid #c9c9c9;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export default UserMyPage;
