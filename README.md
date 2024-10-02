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

```
(추후 업데이트)
```

## 시연 화면

```
(추후 업데이트)
```
