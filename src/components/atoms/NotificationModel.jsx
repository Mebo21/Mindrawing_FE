import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring'; // react-spring 임포트
import { FaTimes, FaBell } from 'react-icons/fa'; // 닫기 아이콘

const NotificationModal = ({ onClose }) => {
  const animation = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(-50%)' },
    config: { tension: 220, friction: 15 },
  });

  return (
    <ModalOverlay>
      <ModalContent style={animation}>
        <ModalHeader>
          <FaTimes className="closeIcon" onClick={onClose} /> {/* 닫기 아이콘 */}
        </ModalHeader>
        <NotificationList>
          <NotificationItem>
            <div>
              <FaBell />
            </div>
            <div>
              <h3>8월 달의 육아혜택 지원사업 기간이 얼마 남지 않았습니다!</h3>
              <p>08.29에 정부에서 지원하는 OO사업이 종료됩니다.</p>
              <p>지금 바로 잊지말고 신청하세요!</p>
            </div>
          </NotificationItem>
          <NotificationItem>
            <div>
              <FaBell />
            </div>
            <div>
              <h3>9월 달에 찾아올 육아혜택에는 어떤 것들이 있을까?!</h3>
              <p>육아 혜택 정보 모음 탭에서 확인해보세요!</p>
              <p>GoGoGo~~😘</p>
            </div>
          </NotificationItem>
        </NotificationList>
      </ModalContent>
    </ModalOverlay>
  );
};

// 모달 오버레이 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 반투명 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 모달 컨텐츠 스타일
const ModalContent = styled(animated.div)`
  /* animated.div로 애니메이션 적용 */
  width: 320px;
  height: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// 모달 헤더 스타일 (닫기 버튼)
const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  .closeIcon {
    cursor: pointer;
  }
`;

// 알림 목록 스타일
const NotificationList = styled.div`
  margin-top: 10px;
`;

// 알림 아이템 스타일
const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  h3 {
    margin: 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #888;
  }

  div:first-child {
    margin-right: 10px;
  }
`;

// 알림 아이콘 스타일
const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotificationModal;
