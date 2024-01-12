# ``Life Quotes`` :book:


## 프로젝트 소개

삶에 지혜가 담긴 명언을 볼 수 있는 React Native로 개발한 앱입니다. <br/>
기능은 미미하나, 스토어에 첫 배포(검수 중) 해 본 의미있는 프로젝트입니다. <br/>

<img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/7316d293-1f8a-432e-a855-1e335d706ec7" alt="2" width="300" height="500">



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

| 작업                                         | 미리보기                                                                                        |
| -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **세로뷰**                           | <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/9c6d05d1-692e-4bad-93dc-69a5b8cd3e9a" alt="메인페이지" width="300" height="550"> <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/c6b5f7a2-1d6e-4cbe-9af6-8e7cfdcfb0c8" alt="즐찾" width="300" height="550"> |
| **가로뷰**                                        | <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/7cb1f6a2-3ce6-41b3-bc3f-bfdb4de853e7" alt="가로" width="550" height="300"> |
| **데이터 없음**                               | <img src="https://github.com/HojinLim/RN_life_quotes/assets/69897998/279d79a7-1a16-47a5-99a2-22c7738150f4" alt="데이터 없음" width="300" height="550"> |



---

<br/><br/>

## :partying_face: 주요 기능

### 셔플

### 즐겨찾기

### 데이터 초기화


<br/><br/>

---
## :ballot_box_with_check: 성능 개선

링크


---

## :sunglasses:주요 파일 및 폴더

#### React Navigation, Material Bottab Tab으로 하단 탭 구성.
📦navigator
 ┗ 📜TabNavigator.tsx

#### Redux Persist로 앱이 종료 되어도 내부 DB를 통해 저장된 값을 가져오게끔 구성.
📦redux
 ┣ 📂slices
 ┃ ┣ 📜allQuoteSlice.ts
 ┃ ┣ 📜favoriteQuoteSlice.ts
 ┃ ┗ 📜settingSlice.ts
 ┗ 📜store.ts

#### useWindowsDimenstion 함수로 현재 디바이스의 가로, 세로 길이 측정해서, </br> 각각 화면에서의 반응형 구현.
 📦utils
 ┣ 📜isPortraitNow.ts



<br/><br/>


--- 


# 명언 자료

https://github.com/dwyl/quotes
