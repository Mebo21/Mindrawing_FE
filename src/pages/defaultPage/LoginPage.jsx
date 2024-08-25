import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 눈 아이콘 임포트
import PageTemplate from '../../components/templates/PageTemplate';
import login_logo from '../../assets/logos/login_logo.png';
import { Link } from 'react-router-dom';
import Header from '../../components/layouts/Header';
import Nav from './../../components/layouts/Nav';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태
  const [formData, setFormData] = useState({ id: '', password: '' }); // 폼 데이터 상태
  const [errors, setErrors] = useState({ id: false, password: false }); // 에러 상태 관리

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 입력하면 해당 필드의 에러 상태 초기화
    if (value !== '') {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력값이 없을 때 에러 상태 업데이트
    const newErrors = {
      id: formData.id === '',
      password: formData.password === '',
    };

    setErrors(newErrors);

    // 에러가 없을 경우에만 로그인 처리 (여기서는 콘솔 출력)
    if (!newErrors.id && !newErrors.password) {
      console.log('ID:', formData.id);
      console.log('Password:', formData.password);
    }
  };

  return (
    <PageTemplate>
      <Header title="로그인" />
      <LoginContainer>
        <LogoWrapper>
          <img src={login_logo} alt="login_logo" />
        </LogoWrapper>
        <Title>마인드로잉 로그인</Title>
        <LoginForm onSubmit={handleSubmit}>
          <FormItem>
            <Label>
              아이디
              {errors.id && <ErrorMessage> 아이디를 입력해주세요</ErrorMessage>}
            </Label>
            <input
              type="text"
              name="id"
              placeholder="ID를 입력해주세요"
              value={formData.id}
              onChange={handleInputChange}
              className={errors.id ? 'error' : ''}
            />
          </FormItem>
          <FormItem>
            <Label>
              비밀번호
              {errors.password && <ErrorMessage> 비밀번호를 입력해주세요</ErrorMessage>}
            </Label>
            <PasswordWrapper>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="비밀번호를 입력해주세요"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? 'error' : ''}
              />
              <PasswordToggleIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </PasswordToggleIcon>
            </PasswordWrapper>
          </FormItem>
          <LoginButton type="submit">로그인</LoginButton>
          <SignUpLink>
            <Link to="/register">회원가입</Link>
          </SignUpLink>
          <FindInfoLink>아이디/비밀번호 찾기</FindInfoLink>
        </LoginForm>
      </LoginContainer>
      <Nav />
    </PageTemplate>
  );
};

// 스타일 정의
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const LogoWrapper = styled.div`
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
`;

const LoginForm = styled.form`
  width: 340px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Pretendard', sans-serif; /* 폰트 적용 */

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #c9c9c9;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &.error {
      border-color: red; /* 에러 시 테두리 빨간색 */
    }

    &:focus {
      border-color: #7469b6;
    }
  }
`;

const FormItem = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-left: 5px;
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

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #7469b6;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Pretendard', sans-serif;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5a51a3;
  }
`;

const SignUpLink = styled.div`
  margin-top: 10px;
  text-align: center;

  a {
    color: #7469b6;
    text-decoration: underline;
    font-size: 14px;
    font-weight: bold;
  }
`;

const FindInfoLink = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #888;
  font-size: 12px;
`;

export default LoginPage;
