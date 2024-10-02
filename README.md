# GCP 전남대 2조 - 마인드로잉

## 목차

[1. 프로젝트 정보](#프로젝트-정보)

[2. 아키텍처](#아키텍처)

[3. 디렉터리 구조](#디렉터리-구조)

[4. 기술 스택](#기술-스택)

[5. 커밋 컨벤션](#커밋-컨벤션)

[6. 코딩 컨벤션](#코딩-컨벤션)

[7. 페이지별 화면구성과 주요 기능](#페이지별-화면구성과-주요-기능)

[8.시연 화면](#시연-화면)

## 프로젝트 정보

### Installation

```
$ git clone https://github.com/rktdnjs/Mindrawing_FE.git
$ cd Mindrawing_FE
$ npm install
$ npm run dev
```

### 프로젝트 기획 의도

![Introduction](https://github.com/user-attachments/assets/9fa17aa0-a523-4f6d-8af6-518f6d52f0ef)

```
코로나19 시기를 지나면서, 소아청소년 정신 질환자 중 무려 65%가 악화되었다.
소아청소년 시기의 정신 질환의 조기 파악 및 대응은 앞으로의 아이 성장에 있어 매우 중요하다.
이를 부모의 입장에서 바라볼 때 아이의 정신질환을 파악하는 데 참고할 수 있는 HTP 검사의 경우
시중 서비스 기준 1회당 약 40,000 ~ 80,000원으로, 검사비용이 부담스러운 것은 사실이다.
이러한 상황에서 우리는 집에서도 손쉽게 아이가 그린 HTP 그림을 기반으로 단 몇십초만에 손쉽고 빠르게
HTP 검사를 진행할 수 있으면서도 검사 결과를 바탕으로 바로 주변의 심리 센터와 매칭해줄 수 있는
서비스를 개발하여 도움이 필요한 가족과 그 아이들을 돕고자 해당 서비스를 기획하게 되었다.
```

## 아키텍처

![Architecture](https://github.com/user-attachments/assets/821dd173-d065-45f7-90ad-eaff78663e75)

```
Cloud Storage : 비정형 데이터 저장 및 관리(HTP 이미지)
Cloud SQL : 정형 데이터 저장 및 관리 
Compute Engine : VM 인스턴스 생성 및 활용 
```

## 디렉터리 구조

```
(예시, 수정될 수 있음)
📁 public
📁 src
├── 📁 apis
├── 📁 assets
│   └─ 📁 images
├── 📁 components
│   ├─ 📁 atoms
│   ├─ 📁 layout
│   ├─ 📁 molecules
│   └─ 📁 templates
├── 📁 constant
├── 📁 mocks
├── 📁 pages
├── 📁 styles
├── 📁 utils
├── App.jsx
├── index.css
└── main.jsx
vite.config.js
index.html
```

## 기술 스택

```
FE : React(HTML + CSS + JS)
[FE 개발시 사용한 라이브러리]
- styled-component(CSS 컴포넌트화 활용) 
- react-responsive(반응형 레이아웃 구현) 
- react-query(API 처리) 
- react-icons & @mui/icons-material @mui/material(아이콘) 
- sweetalert2(알림용) 
- prettier(코드 보기 좋게 정리용)
- axios(HTTP 요청을 쉽게 처리하기 위함)
- react-slick slick-carousel(Carousel 라이브러리)
- react-spring(모달창을 부드럽게 열고 닫기 위함)
- react-daum-postcode(주소 검색용)
- react-spinners(로딩 스피너 활용)
- react-calendar(캘린더 라이브러리)
BE : Flask(Python)
AI : YOLOv5 베이스
```

## 커밋 컨벤션

```
1. commit의 제목은 commit을 설명하는 하나의 구나 절로 완성
2. importanceofcapitalize -> Importance of Capitalize 와 같은 형식으로 작성
3. prefix 앞에 달아주기
   - init  : 프로젝트 시작
	 - feat  : 기능 개발 관련
	 - style : CSS 등의 스타일 변경 관련
	 - comment : 주석 추가 및 수정
	 - docs  : 문서화 작업(README.md 수정)
	 - fix : 버그 수정
	 - refactor : 기능에 변동 없이 코드가 리팩토링 되었을 경우
	 - conf  : 환경설정 관련(패키지 매니저 관리/라이브러리 추가)
	 (- build : 빌드 관련)
	 (- test  : 테스트 관련)

작성 예시) 
[feat] : 로그인 페이지 input 추가
[style] : 메인 페이지 UI 수정
```

## 코딩 컨벤션

```
[PascalCase]
- Components    ex) Button, LoginForm
[camelCase]
- let variable
- const variable
- function name ex) handleClick, ..
- custom hook   ex) useFetch, ...
- props
[UPPERCASE]
- constant      ex) CONSTANT
```

## 페이지별 화면구성과 주요 기능

### 홈페이지

| 홈페이지 | 홈페이지(모달창 활성화) | 홈페이지(위치 권한 요청) | 홈페이지(하단 지도)  | 
| :---: | :---: | :---: | :---: |
| ![image](https://github.com/user-attachments/assets/09bfed02-e182-4e67-9258-7496874f2d3c) | ![image](https://github.com/user-attachments/assets/ab7e7c86-304d-4eab-a832-794f752d8eaa) | ![image](https://github.com/user-attachments/assets/d09071c7-dd49-4be3-acff-822adebd87b2) | ![image](https://github.com/user-attachments/assets/3a961468-3363-4a31-ad1e-dd3e9b31bb92) |

### 로그인 페이지

| 로그인 페이지 | 로그인 완료 |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/4592a950-3beb-4366-a473-93393b17533b) | ![image](https://github.com/user-attachments/assets/c6939a07-fa0c-4362-8615-d5bb6d7bfef4) |

### 회원가입 페이지

| 회원가입 페이지 | 회원가입 주소 정보 입력 | 회원가입 완료 |
| :---: | :---: | :---: |
| ![image](https://github.com/user-attachments/assets/41ae956c-130c-4532-a8b1-8d13b2e3b450) | ![image](https://github.com/user-attachments/assets/663261c9-1b7c-4ea9-8029-4aeb00ee50bc) | ![image](https://github.com/user-attachments/assets/99c839a7-660e-4c73-8dca-5464f7a4b8de) |

### 그림심리분석 페이지(HTP 검사)

| 그림심리분석 소개 페이지 | HTP 그림 및 정보 입력 페이지(상단) | HTP 그림 및 정보 입력 페이지(하단) |
| :---: | :---: | :---: |
| ![image](https://github.com/user-attachments/assets/8cfeb852-9c67-4d7e-9d15-0659c027fc76) | ![image](https://github.com/user-attachments/assets/1b72f0cb-4456-4d09-84d3-32298e86fa28) | ![image](https://github.com/user-attachments/assets/ad7d53d9-b475-4567-a415-27a85bae60d4) |

| 그림심리분석 진행 페이지(AI 서버 전송) | 그림심리분석 진행 페이지(결과 불러오기) |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/f0703b0e-c0be-494c-b484-f8b6379bddd4) | ![image](https://github.com/user-attachments/assets/520d4f3e-f989-4759-b3f6-432d5f0d43bf) |

| 그림심리분석 결과 페이지 | 그림심리분석 내역 페이지 |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/d7c4bf96-1bf0-449f-adf6-cae0cad146de) | ![image](https://github.com/user-attachments/assets/df5a9910-4655-43fe-91a2-e73e2a0de360) |

### 센터매칭 페이지

| 센터 목록 페이지 | 선택 센터 페이지(상단) | 선택 센터 페이지(하단) |
| :---: | :---: | :---: |
| ![image](https://github.com/user-attachments/assets/5eeecb18-0b52-4363-9502-e45792e06dfc) | ![image](https://github.com/user-attachments/assets/ccdb89cb-72f4-44e6-9ad9-9eef0023f293) | ![image](https://github.com/user-attachments/assets/838f6a71-bd3a-42b6-9811-f66d636f2d74) |

| 센터 예약 페이지 | 센터 예약 페이지(확인창) |  센터 예약 페이지(예약 완료) |
| :---: | :---: | :---: |
| ![image](https://github.com/user-attachments/assets/b26ac990-4f12-413c-bad9-d5d6f4bbe98b) | ![image](https://github.com/user-attachments/assets/ee0a5873-e0e8-4759-bfa7-3804aa5d368c) | ![image](https://github.com/user-attachments/assets/adbd4037-932e-4276-b6fb-171ed7e1471a) |

### 육아혜택정보 페이지

| 육아 혜택 정보 목록 페이지 | 육아 혜택 정보 상세 페이지 |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/f18d14be-e52a-4fb1-9c9c-913d179d263a) | ![image](https://github.com/user-attachments/assets/4ee2f0ec-5425-4ce5-b705-205f887e3ad2) |

### 마이페이지

| 마이페이지(관리자) | 마이페이지(사용자) |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/4d5b000c-63e3-4532-acca-0a4e44dad4c9) | ![image](https://github.com/user-attachments/assets/484fd244-339e-4809-b4c6-1f65e8f8148f) |

| 마이페이지(로그아웃 확인) | 마이페이지(로그아웃 완료) |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/ac209567-9219-41e3-b26e-cac02fe70064) | ![image](https://github.com/user-attachments/assets/9d557ef1-3a2f-4e0b-bb9c-6571079afba8) |

### 번외 - 에러페이지 & 로딩시 컴포넌트

| 에러 페이지 | 로딩 컴포넌트 |
| :---: | :---: |
| ![image](https://github.com/user-attachments/assets/d3003abc-0590-41ff-ac2b-9e99e1d93cc8) | ![image](https://github.com/user-attachments/assets/122ae047-30d9-4413-8f52-e7cd1ef55d7d) |

## 시연 화면

https://github.com/user-attachments/assets/3329aae0-cb85-4d22-84b8-2c87dddde796

```
1. (회원가입 및 로그인은 생략)사용자 입장에서의 AI기반 HTP 검사 이용 과정 및 결과 확인
2. 사용자의 필요에따라 원하는 심리 센터 확인 및 예약 신청 시스템 사용 과정
```
