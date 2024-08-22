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

```
(추후 업데이트)
```

## 아키텍처

```
(추후 업데이트)
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
(추후 업데이트)
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
