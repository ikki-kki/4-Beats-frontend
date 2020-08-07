# 1차 프로젝트 : beatsbydre.com 클론

## Introduction
- WeCode 기 수강생들의 1차 2주 클론 프로젝트입니다.
- 프로젝트 기간 : 2020.5.25 ~ 2020.6.5 (2주)
- 4명의 개발자가 함께 협업했습니다. (3 Front-End, 1Back-End)

## Demo
[![youtube](https://i.ytimg.com/vi/SYwS8Oii69w/original.jpg)](https://www.youtube.com/embed/SYwS8Oii69w?t=0s) 

## 목표
- [beatsbydre.com](http://beatsbydre.com) 사이트의 interface 와 동일하게 화면 구현하기.
- 실제 사이트에 없는 회원가입/로그인, Cart, 마이페이지, 결제내역 기능 추가하기.
- Back-End API를 통해 데이터를 GET / POST / DELETE 하기.

## 사용한 기술
- Front-End: ReactJS, Sass
- Back-End: Django, MySQL([Back-End Repository](https://github.com/wecode-bootcamp-korea/4-Beats-backendhttps://github.com/wecode-bootcamp-korea/4-Beats-backend))
- Deployment: AWS

## 기능
- 회원가입 및 로그인 (Access Token 전송)
- 회원별 카트 목록과 구매 내역 데이터를 저장
- 카트에 담은 아이템 수량 증감과 총 구매가격 실시간 업데이트, 담은 아이템 삭제 기능 구현
- 메인페이지 및 상세 페이지 Sass와 react-reveal 라이브러리를 이용한 Animation 구현
- React Router를 이용한 페이지 라우터 이동 구현
- Daum 우편번호 서비스 API를 이용하여 배송지 입력 기능 제공
