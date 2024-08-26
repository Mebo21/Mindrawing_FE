import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/layouts/Header';
import PageTemplate from '../../components/templates/PageTemplate';
import { GoUpload } from 'react-icons/go';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import uploadDatas from '../../apis/analysis';
import Loader from '../../components/layouts/Loader';

const AnalysisInputPage = () => {
  const [hImage, setHImage] = useState(null);
  const [tImage, setTImage] = useState(null);
  const [pImage, setPImage] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState('null');
  const [userId, setUserId] = useState(null);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 1000000)); // 난수 생성
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => uploadDatas(formData),
    onSuccess: (data) => {
      console.log('데이터 전송 성공:', data);
      setIsLoading(false); // 데이터 전송 완료 후 로딩 상태 해제
      navigate('/analysis-summary/1');
    },
    onError: (error) => {
      console.error('데이터 전송 실패:', error);
      setIsLoading(false); // 에러 발생시 로딩 상태 해제
    },
  });

  const isNextButtonEnabled = hImage && tImage && pImage && age && gender;

  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const renameFile = (file, newName) => {
    return new File([file], newName, {
      type: file.type,
      lastModified: file.lastModified,
    });
  };

  const handleSubmit = () => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const hImageRenamed = renameFile(hImage, `${hImage.name.split('.')[0]}_house.${hImage.name.split('.').pop()}`);
      const tImageRenamed = renameFile(tImage, `${tImage.name.split('.')[0]}_tree.${tImage.name.split('.').pop()}`);
      const pImageRenamed = renameFile(pImage, `${pImage.name.split('.')[0]}_person.${pImage.name.split('.').pop()}`);
      const files = [hImageRenamed, tImageRenamed, pImageRenamed];

      const stringNumber = randomNumber.toString();

      formData.append('age', age);
      formData.append('gender', gender);
      formData.append('name', name);
      formData.append('random_number', stringNumber);
      formData.append('id', localStorage.getItem('id'));
      console.log('id : ', typeof localStorage.getItem('id'), localStorage.getItem('id'));

      console.log('formData : ', formData);
      console.log('hImageRenamed : ', typeof hImageRenamed, hImageRenamed);
      console.log('tImageRenamed : ', typeof tImageRenamed, tImageRenamed);
      console.log('pImageRenamed : ', typeof pImageRenamed, pImageRenamed);
      console.log('age : ', typeof age, age);
      console.log('gender : ', typeof gender, gender);
      console.log('name : ', typeof name, name);
      console.log('random_number : ', typeof stringNumber, stringNumber);
      console.log('files : ', typeof files, files);

      // files.forEach((file) => {
      //   formData.append('images', file);
      // });

      // 3개의 파일을 FormData에 추가
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      // mutation.mutate(formData, {
      //   onSuccess: () => {
      //     console.log('데이터 전송 성공');
      //     navigate('/analysis-summary/1');
      //     // resolve();
      //   },
      //   onError: (error) => {
      //     console.log('데이터 전송 실패');
      //     // reject(error);
      //   },
      // });
      mutation.mutate(formData);
    });
  };

  const handlePrevious = () => {
    navigate('/analysis-intro');
  };

  const handleNext = () => {
    if (isNextButtonEnabled) {
      handleSubmit();
    }
  };

  return (
    <PageTemplate>
      <Header title={'그림심리분석 정보 입력'} />
      {isLoading && <Loader />} {/* 로딩 상태일 때 Loader 컴포넌트 표시 */}
      {!isLoading && (
        <FormContainer>
          <Title>
            <b>아이의 H/T/P 그림을 차례대로 업로드 해주세요! </b>
            <span className="required">*</span>
          </Title>

          {/* H 그림 업로드 */}
          <ImageUploadSection>
            <Label>
              H 그림 (House, 집 단독 그림) <span className="required">*</span>
            </Label>
            <ImageUploadBox onClick={() => document.getElementById('hUpload').click()}>
              {hImage ? (
                <PreviewImage src={URL.createObjectURL(hImage)} alt="H 그림" />
              ) : (
                <UploadContent>
                  <GoUpload size={40} color="c9c9c9" />
                  <span>그림 사진 업로드하기</span>
                </UploadContent>
              )}
              <input
                id="hUpload"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setHImage)}
                style={{ display: 'none' }}
              />
            </ImageUploadBox>
          </ImageUploadSection>

          {/* T 그림 업로드 */}
          <ImageUploadSection>
            <Label>
              T 그림 (Tree, 나무 단독 그림) <span className="required">*</span>
            </Label>
            <ImageUploadBox onClick={() => document.getElementById('tUpload').click()}>
              {tImage ? (
                <PreviewImage src={URL.createObjectURL(tImage)} alt="T 그림" />
              ) : (
                <UploadContent>
                  <GoUpload size={40} color="c9c9c9" />
                  <span>그림 사진 업로드하기</span>
                </UploadContent>
              )}
              <input
                id="tUpload"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setTImage)}
                style={{ display: 'none' }}
              />
            </ImageUploadBox>
          </ImageUploadSection>

          {/* P 그림 업로드 */}
          <ImageUploadSection>
            <Label>
              P 그림 (Person, 사람 단독 그림) <span className="required">*</span>
            </Label>
            <ImageUploadBox onClick={() => document.getElementById('pUpload').click()}>
              {pImage ? (
                <PreviewImage src={URL.createObjectURL(pImage)} alt="P 그림" />
              ) : (
                <UploadContent>
                  <GoUpload size={40} color="c9c9c9" />
                  <span>그림 사진 업로드하기</span>
                </UploadContent>
              )}
              <input
                id="pUpload"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setPImage)}
                style={{ display: 'none' }}
              />
            </ImageUploadBox>
          </ImageUploadSection>

          {/* 나이 입력 */}
          <SelectSection>
            <Label>
              아이의 나이를 입력해주세요! <span className="required">*</span>
            </Label>
            <Select value={age} onChange={(e) => setAge(e.target.value)}>
              <option value="">아이의 나이</option>
              {Array.from({ length: 13 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}세
                </option>
              ))}
            </Select>
          </SelectSection>

          {/* 성별 선택 */}
          <SelectSection>
            <Label>
              아이의 성별을 선택해주세요! <span className="required">*</span>
            </Label>
            <GenderSelect>
              <GenderButton selected={gender === '남자'} onClick={() => setGender('남자')}>
                남자
              </GenderButton>
              <GenderButton selected={gender === '여자'} onClick={() => setGender('여자')}>
                여자
              </GenderButton>
            </GenderSelect>
          </SelectSection>

          {/* 이름 입력 (선택 필드) */}
          <SelectSection>
            <Label>아이의 이름을 입력해주세요! (선택)</Label>
            <NameInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ex. 홍길동" />
          </SelectSection>
        </FormContainer>
      )}
      {/* 하단 네비게이션 */}
      {!isLoading && (
        <NavContainer>
          <NavButton className="previousButton" onClick={handlePrevious} previous>
            <IoIosArrowBack size={20} className="icon-left" />
            <span>이전</span>
          </NavButton>
          <NavButton primary onClick={handleNext} disabled={!isNextButtonEnabled} isenabled={isNextButtonEnabled}>
            <span>다음</span>
            <IoIosArrowForward size={20} className="icon-right" />
          </NavButton>
        </NavContainer>
      )}
    </PageTemplate>
  );
};

export default AnalysisInputPage;

const FormContainer = styled.div`
  width: 100%;
  height: 640px;
  padding: 10px;
  overflow-y: auto;
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

const Title = styled.div`
  margin-bottom: 10px;
  .required {
    color: red;
  }
`;

const Label = styled.div`
  margin-bottom: 10px;
  font-family: 'Pretendard', sans-serif;
  .required {
    color: red;
  }
`;

const ImageUploadSection = styled.div`
  margin-bottom: 20px;
`;

const ImageUploadBox = styled.div`
  width: 100%;
  height: 150px;
  border: 2px solid #c9c9c9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 10px;
    color: #c9c9c9;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const SelectSection = styled.div`
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #c9c9c9;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #8b73d2;
    outline: none;
  }
`;

const GenderSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GenderButton = styled.button`
  width: 48%;
  padding: 10px;
  border: 2px solid ${(props) => (props.selected ? '#8B73D2' : '#c9c9c9')};
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? '#8B73D2' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#c9c9c9')};
  cursor: pointer;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  transition: border-color 0.5s ease;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #c9c9c9;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #8b73d2;
    outline: none;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 0 25px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Pretendard', 'sans-serif';
  position: relative;
  background-color: ${(props) => (props.previous ? 'white' : props.isenabled ? '#8B73D2' : '#C9C9C9')};
  color: ${(props) => (props.previous ? '#8B73D2' : 'white')};
  border: ${(props) => (props.previous ? '2px solid #8B73D2' : 'none')};
  cursor: ${(props) => (props.isenabled || props.previous ? 'pointer' : 'not-allowed')};
  transition: background-color 0.3s ease;

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .icon-left {
    position: absolute;
    left: 15px;
  }

  .icon-right {
    position: absolute;
    right: 15px;
  }

  &:disabled {
    pointer-events: none;
  }
`;
