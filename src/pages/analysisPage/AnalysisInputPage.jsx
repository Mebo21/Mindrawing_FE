import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/layouts/Header';
import AnalysisNav from '../../components/layouts/AnalysisNav';
import PageTemplate from '../../components/templates/PageTemplate';
import { GoUpload } from 'react-icons/go';

const AnalysisInputPage = () => {
  // 필수 필드 상태 관리
  const [hImage, setHImage] = useState(null);
  const [tImage, setTImage] = useState(null);
  const [pImage, setPImage] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);

  // 필수 필드가 모두 입력되었는지 확인
  const isNextButtonEnabled = hImage && tImage && pImage && age && gender;

  // 이미지 업로드 핸들러
  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // 이미지 미리보기
    }
  };

  return (
    <PageTemplate>
      <Header title={'그림심리분석 정보 입력'} />
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
              <PreviewImage src={hImage} alt="H 그림" />
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
              <PreviewImage src={tImage} alt="T 그림" />
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
              <PreviewImage src={pImage} alt="P 그림" />
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

      {/* 하단 네비게이션 */}
      <AnalysisNav isNextButtonEnabled={isNextButtonEnabled} />
    </PageTemplate>
  );
};

export default AnalysisInputPage;

const FormContainer = styled.div`
  width: 100%;
  height: 640px;
  padding: 10px;
  overflow-y: auto;

  /* 스크롤바 스타일 */
  /* 그냥 안보이게 하는걸로 결정 */
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
