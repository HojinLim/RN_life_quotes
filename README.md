# ``Life Quotes`` :book:


## 프로젝트 소개

삶에 지혜가 담긴 명언을 볼 수 있는 React Native로 개발한 앱입니다. <br/>
기능은 미미하나, 스토어에 첫 배포(검수 중) 해 본 의미있는 프로젝트입니다.


**배포 링크**: 

<br/><br/>

## :boxing_glove: 개발기간

**(24.01.04~24.01.12)**

<br/><br/>

## :sunflower: Stacks

### Version Control
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Front-End
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/react_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">


### Deployment
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

<br/><br/>

---

## 화면 구성

| 작업                                       | 미리보기                                                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **세로뷰**                                 | <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/9c6d05d1-692e-4bad-93dc-69a5b8cd3e9a" alt="메인페이지" width="300" height="550"> <hr> <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/c6b5f7a2-1d6e-4cbe-9af6-8e7cfdcfb0c8" alt="즐찾" width="300" height="550"> |
| **가로뷰**                                     | <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/7cb1f6a2-3ce6-41b3-bc3f-bfdb4de853e7" alt="가로" width="550" height="300"> |
| **데이터 없음**                            | <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/279d79a7-1a16-47a5-99a2-22c7738150f4" alt="데이터 없음" width="300" height="550"> |


---

<br/><br/>

## :partying_face: 주요 기능

### 메인페이지

- FireStore Dababase와 Storage에서 사진과 제품 정보를 가져옵니다.
- 카테고리별로 데이터를 나눠서 품목을 볼 수 있습니다.

### 상세 페이지

- 상세 제품 정보를 볼 수 있습니다.
- 로그인한 현재 회원이 좋아요, 장바구니로 제품의 상태에 영향을 줍니다.


### 좋아요, 장바구니 페이지

- 좋아요 및 장바구니 추가한 제품을 확인하고 삭제할 수 있습니다.


### 관리자 페이지

- 관리자 권한이 있는 회원으로 로그인 시, /admin 으로 들어갈 수 있습니다. 제품을 관리할 수 있는 페이지입니다.
- 제품을 등록하면 해당 제품의 정보를 Firebase 백앤드에 저장합니다.

### 소셜 로그인

- 구글, 페이스북으로도 회원 가입 및 로그인 가능합니다.

- 관리자 권한이 있는 회원으로 로그인 시, /admin 으로 들어갈 수 있습니다. 제품을 관리할 수 있는 페이지입니다.
- 제품을 등록하면 해당 제품의 정보를 Firebase 백앤드에 저장합니다.

<br/><br/>

## :sunglasses:주요 파일 및 폴더

#### 📜 useProductQuery.tsx, useUserLikeQuery.tsx: 유저가 상품에 대한 상호작용을 react-query문으로 제어할 수 있는 파일들입니다.
#### 📜Router.tsx: 사용할 때 페이지를 이동할 때 필요한 라이브러리가 담긴 파일입니다.
#### 📜firebase.ts: Firebase 환경 설정 파일입니다.
#### 📜dataManage.ts: DB에 담긴 전체 상품 데이터와 유저의 좋아요, 장바구니 리스트를 가져오는 비동기 함수들이 있습니다.
#### 📜ProductDetailPage.ts: 제품의 상세 정보들을 가져오고 좋아요, 장바구니 유무에 따라 정보를 관리 해줍니다.
#### 📜GoogleLoginButton.ts: 인증 정보를 통해 구글 로그인 관리를 해줍니다.


<br/><br/>

<br/><br/>






--- 


# Getting Started

<img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/8c9bf4bf-2a9d-4cfd-88bf-ab2fead98c62" alt="Your Image" width="250" height="500">


# Ref

https://github.com/dwyl/quotes
