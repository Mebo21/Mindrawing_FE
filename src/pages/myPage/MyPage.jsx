import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from '../../components/layouts/Nav';
import profileImage from '../../assets/images/profile.png'; // 사전 준비된 이미지 경로로 사용
import { logoutMessage, logoutCompleteMessage } from '../../utils/alert';
import routes from '../../constant/routes';
import Swal from 'sweetalert2';
import UserMyPage from './UserMyPage';
import AdminMyPage from './AdminMyPage';

const MyPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const logout = () => {
    Swal.fire(logoutMessage).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(logoutCompleteMessage).then(localStorage.clear()).then(navigate(routes.home));
      }
    });
  };

  useEffect(() => {
    // localStorage에서 nickname과 admin 여부를 가져오기
    const storedNickname = localStorage.getItem('nickname');
    const adminStatus = localStorage.getItem('admin') === 'true';

    setNickname(storedNickname || '사용자');
    setIsAdmin(adminStatus);
  }, []);

  return (
    <PageTemplate>
      <MyInfoContainer>
        <Header>
          <div>내 정보</div>
        </Header>
        <ProfileContainer>
          <ProfileImage src={profileImage} alt="profile" />
          <UserInfo>
            <UserName>{nickname}님 환영합니다!</UserName>
            <LogoutButton onClick={logout}>로그아웃</LogoutButton>
          </UserInfo>
        </ProfileContainer>
      </MyInfoContainer>
      <Divider />
      {isAdmin ? <AdminMyPage /> : <UserMyPage />}
      <Nav currentPage="myPage" />
    </PageTemplate>
  );
};

// 스타일 정의
const MyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 360px;
  height: 140px;
  padding-left: 20px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const UserName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LogoutButton = styled.button`
  background-color: #7469b6;
  color: white;
  border: none;
  width: 60px;
  height: 40px;
  border-radius: 10px;
  font-size: 10px;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a51a3;
  }
`;

const Divider = styled.div`
  width: 360px;
  height: 20px;
  background-color: #f1f4f9;
`;

export default MyPage;
