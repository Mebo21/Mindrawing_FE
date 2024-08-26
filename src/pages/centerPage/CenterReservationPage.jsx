import React, { useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/templates/PageTemplate';
import Nav from '../../components/layouts/Nav';
import Header from '../../components/layouts/Header';
import Swal from 'sweetalert2';
import 'react-calendar/dist/Calendar.css';
import routes from '../../constant/routes';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar'; // 캘린더 라이브러리
import moment from 'moment';

const CenterReservationPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // 예약 요청 처리 함수
  const handleReservation = () => {
    Swal.fire({
      title: '예약 요청',
      text: `정말 ${selectedDate.toLocaleDateString()} ${selectedTime}로 예약하시겠습니까?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('예약 완료', '예약이 완료되었습니다!', 'success').then(navigate(routes.home));
      }
    });
  };

  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <PageTemplate>
      <Header title="선택 센터 예약" />
      <ReservationContainer>
        <CalendarWrapper>
          <Calendar
            formatDay={(locale, date) => moment(date).format('DD')}
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </CalendarWrapper>
        <TimeSlotsContainer>
          <TimeSlotTitle>예약 가능 시간대</TimeSlotTitle>
          <TimeSlots>
            {timeSlots.map((time) => (
              <TimeSlotButton key={time} isSelected={time === selectedTime} onClick={() => setSelectedTime(time)}>
                {time}
              </TimeSlotButton>
            ))}
          </TimeSlots>
        </TimeSlotsContainer>
        <SelectedInfoContainer>
          <SelectedInfo>선택하신 예약 일정</SelectedInfo>
          <SelectedDate>
            {selectedDate.toLocaleDateString()} {selectedTime ? selectedTime : '시간을 선택해주세요'}
          </SelectedDate>
          <ReservationButton onClick={handleReservation}>예약 요청</ReservationButton>
        </SelectedInfoContainer>
      </ReservationContainer>
      <Nav currentPage="centerListPage" />
    </PageTemplate>
  );
};

// 스타일 정의
const ReservationContainer = styled.div`
  width: 100%;
  height: 660px;
  padding: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TimeSlotsContainer = styled.div`
  margin-bottom: 20px;
`;

const TimeSlotTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TimeSlots = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const TimeSlotButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? '#7469b6' : '#d3d3d3')};
  color: ${(props) => (props.isSelected ? 'white' : '#000')};
  border: none;
  font-family: 'Pretendard', 'sans-serif';
  font-size: 14px;
  cursor: pointer;
`;

const SelectedInfoContainer = styled.div`
  margin-top: 20px;
`;

const SelectedInfo = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SelectedDate = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ReservationButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #7469b6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'Pretendard', 'sans-serif';
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5a51a3;
  }
`;

export default CenterReservationPage;
