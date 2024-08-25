import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageTemplate from './../../components/templates/PageTemplate';
import Header from '../../components/layouts/Header';
import { FaCheckSquare, FaRegSquare, FaEye, FaEyeSlash } from 'react-icons/fa'; // 체크박스 아이콘
import Postcode from 'react-daum-postcode'; // Daum 주소 검색 API
import { registerUser } from '../../apis/register';
import Swal from 'sweetalert2'; // Swal 라이브러리 임포트
import routes from '../../constant/routes';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    address: '',
    detailAddress: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태
  const [isAddressOpen, setIsAddressOpen] = useState(false); // 모달 열림 상태
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 상태

  // 입력 데이터 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 체크박스 처리
  const handleCheckboxChange = () => {
    setFormData({ ...formData, agreeTerms: !formData.agreeTerms });
  };

  // 비밀번호 보이기 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 비밀번호 규칙 검증
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
  };

  // 주소 검색 완료 처리
  const handleComplete = (data) => {
    const fullAddress = data.address;
    setFormData({ ...formData, address: fullAddress });
    setIsAddressOpen(false); // 주소 검색 완료 후 모달 닫기
  };

  // 주소 검색 버튼 클릭 시 submit 방지
  const handleAddressSearch = (e) => {
    e.preventDefault(); // 기본 submit 이벤트 방지
    setIsAddressOpen(true);
  };

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 출력할 데이터를 추출
    const submitData = {
      id: formData.id,
      password: formData.password,
      nickname: formData.nickname,
      loc: `${formData.address} ${formData.detailAddress}`, // 주소 + 상세주소 결합
    };

    console.log('전송하는 데이터:', submitData);

    try {
      const result = await registerUser(submitData); // 회원가입 API 호출
      console.log('회원가입 성공:', result);
      // 회원가입 성공 메시지
      Swal.fire({
        icon: 'success',
        title: '회원가입 완료!',
        text: '마인드로잉에 어서오세요🥰 로그인을 진행해주세요!',
      });
      // 회원가입 성공 후 로그인 페이지로 이동하는 코드
      navigate(routes.login);
    } catch (error) {
      console.error('회원가입 실패:', error);
      // 회원가입 실패 메시지
      Swal.fire({
        icon: 'error',
        title: '회원가입 실패',
        text: '에러가 발생했습니다😥 다시 시도해주세요!',
      });
    }
  };

  // 폼 유효성 검증 및 버튼 활성화 상태 업데이트
  useEffect(() => {
    const newErrors = {};

    if (!formData.id) newErrors.id = '아이디를 입력해주세요';
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = '비밀번호를 작성 규칙에 맞게 입력해주세요';
    }
    if (!formData.confirmPassword) newErrors.confirmPassword = '비밀번호를 한 번 더 입력해주세요';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    if (!formData.nickname) newErrors.nickname = '닉네임을 입력해주세요';
    if (!formData.address) newErrors.address = '주소를 입력해주세요';
    if (!formData.agreeTerms) newErrors.agreeTerms = '개인정보 수집 및 이용 동의가 필요합니다';

    setErrors(newErrors);

    // 필드가 모두 채워지고 에러가 없으면 버튼 활성화
    const isValid = Object.keys(newErrors).length === 0;
    setIsButtonEnabled(isValid);
  }, [formData]);

  return (
    <PageTemplate>
      <Header title="회원가입" />
      <RegisterContainer>
        <Title>마인드로잉 회원가입</Title>
        <RegisterForm onSubmit={handleSubmit}>
          {/* 폼 제출 시 handleSubmit 호출 */}
          <FormItem>
            <label>
              아이디 <span>*</span> {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className={errors.id ? 'error' : ''}
              placeholder="ID를 입력해주세요"
            />
          </FormItem>
          <FormItem>
            <label>
              비밀번호 <span>*</span> {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </label>
            <PasswordWrapper>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="8~16자의 영문 대소문자, 숫자 및 특수문자 사용"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? 'error' : ''}
              />
              <PasswordToggleIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </PasswordToggleIcon>
            </PasswordWrapper>
          </FormItem>
          <FormItem>
            <label>
              비밀번호 확인 <span>*</span>{' '}
              {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="비밀번호를 한 번 더 입력해주세요"
            />
          </FormItem>
          <FormItem>
            <label>
              사용할 닉네임 <span>*</span> {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
            </label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              className={errors.nickname ? 'error' : ''}
              placeholder="닉네임을 입력해주세요"
            />
          </FormItem>
          <FormItem>
            <label>
              거주지 정보 <span>*</span> {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
            </label>
            <AddressWrapper>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? 'error' : ''}
                placeholder="주소를 검색하여 입력해주세요"
                readOnly
              />
              <AddressSearchButton onClick={handleAddressSearch}>주소검색</AddressSearchButton>
            </AddressWrapper>
            <input
              type="text"
              name="detailAddress"
              value={formData.detailAddress}
              onChange={handleInputChange}
              placeholder="상세주소를 입력해주세요"
            />
          </FormItem>
          <FormItem>
            <CheckboxWrapper>
              <Checkbox onClick={handleCheckboxChange}>
                {formData.agreeTerms ? <FaCheckSquare size={20} color="#7469b6" /> : <FaRegSquare size={20} />}
              </Checkbox>
              <CheckboxLabel className="checklabel">
                개인정보 수집 및 이용 동의 <span>*</span>
              </CheckboxLabel>
            </CheckboxWrapper>
          </FormItem>
          <RegisterButton type="submit" disabled={!isButtonEnabled} $isEnabled={isButtonEnabled}>
            회원가입
          </RegisterButton>
        </RegisterForm>

        {/* 모달 (주소 검색) */}
        {isAddressOpen && (
          <ModalOverlay>
            <ModalContent>
              <Postcode onComplete={handleComplete} />
              <CloseButton onClick={() => setIsAddressOpen(false)}>닫기</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </RegisterContainer>
    </PageTemplate>
  );
};

// 모달 스타일 정의
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
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #7469b6;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

// 스타일 정의
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RegisterForm = styled.form`
  width: 100%;

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #c9c9c9;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #7469b6;
    }

    & + input {
      margin-top: 10px;
    }
  }
`;

const FormItem = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-items: center;
  }

  span {
    color: red;
    margin-left: 1px;
  }

  span.checklabel {
    color: #000;
  }
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    flex-grow: 1;
  }
`;

const PasswordToggleIcon = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #555;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-left: 10px;
`;

const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  input {
    width: 240px;
  }
`;

const AddressSearchButton = styled.button`
  width: 60px;
  background-color: #000;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckboxLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ $isEnabled }) => ($isEnabled ? '#7469b6' : '#C9C9C9')};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Pretendard', sans-serif;
  cursor: ${({ $isEnabled }) => ($isEnabled ? 'pointer' : 'not-allowed')};
  transition: background-color 0.3s ease-in-out;
`;

export default RegisterPage;
