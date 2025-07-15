#  나를 담은 웹 포트폴리오

이 포트폴리오는 퍼블리셔 & 프론트엔드 과정을 수료하며  
직접 디자인하고 제작한 개인 웹 포트폴리오입니다.  
그동안 작업한 결과물들을 정리된 UI로 소개하며,  
동적인 JavaScript 기능과 Sass 기반의 스타일링을 적용한 프로젝트입니다.

---

## ✨ 주요 특징
- 🎨 Sass를 활용한 모듈형 UI 설계  
- 🧩 자바스크립트로 구현한 다양한 인터랙션  
  - GSAP을 활용한 애니메이션  
  - 마우스 커서 효과  
  - 요소 스크롤 인식 애니메이션 등  
- 📱 반응형 레이아웃 설계 (PC / 태블릿 / 모바일 대응)  
- 🗂️ 작업물 리스트 및 상세 페이지 구성  

---

## 🛠 사용 기술
- HTML5 / CSS3 / Sass(SCSS)  
- JavaScript (Vanilla JS)  
- Vite (빠른 개발 서버)  

---
## 🖥️ 실행화면
<img src="https://private-user-images.githubusercontent.com/219836557/466537935-8a91bf89-185a-4b62-9225-c8810275f4b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI1OTAzNjYsIm5iZiI6MTc1MjU5MDA2NiwicGF0aCI6Ii8yMTk4MzY1NTcvNDY2NTM3OTM1LThhOTFiZjg5LTE4NWEtNGI2Mi05MjI1LWM4ODEwMjc1ZjRiNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxNVQxNDM0MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMTMyZDU4NmQxYWJlMDY1N2JhNWJhZWNjNGFjYTg2ZTVjMzYyN2ZjNDhjNTYxYmQxZThlNDI1NjIyNDlhY2YxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dcz22XaCK1U8Bg9CroRs5W-U8j89Cx9m3LF0i-eqQFc" alt="전체화면">

---

## 📁 폴더 구조
```
final-portfolio/
├── dist/ 
├── node_modules/ 
├── public/ 
├── src/
│ ├── assets/
│ ├── css/
│ │ ├── base/
│ │ │ ├── fonts.css
│ │ │ ├── reset.css
│ │ │ └── vars.css # 변수 지정
│ │ └── pages/
│ │ ├── about.css
│ │ ├── contact.css
│ │ ├── footer.css
│ │ ├── header.css
│ │ ├── intro.css
│ │ ├── project.css
│ │ └── work.css
│ ├── js/ # JavaScript 기능 구현
│ │ ├── about.js
│ │ ├── bgColor.js
│ │ ├── contact.js
│ │ ├── cursor.js
│ │ ├── intro.js
│ │ ├── link.js
│ │ ├── menu.js
│ │ ├── project.js
│ │ ├── splitText.js
│ │ └── work.js
│ ├── index.html
│ ├── main.js # 진입 스크립트
├── .gitignore
├── package.json 
├── README.md
├── style.css
└── vite.config.js # Vite 설정
```

---

## 🚀 실행 방법
```bash
npm install   

npm run dev   
```

---

🤩 프로젝트를 통해 느낀 점
이 포트폴리오는 단순히 예쁘게 보이는 웹사이트가 아닌,
브랜드처럼 ‘나’를 소개하고 표현할 수 있는 수단이 되도록 기획했습니다.

특히 Sass로 컴포넌트화된 스타일을 설계하고,
JavaScript로 동적인 효과를 구현하며 디자인과 개발의 연결 고리를 경험할 수 있었습니다.

또한, 마우스 커서 커스터마이징, 텍스트 애니메이션, 스크롤 연동 등
작은 요소 하나하나를 직접 구현해보며, UI 디테일의 중요성과
사용자 경험을 고려한 퍼블리싱 역량을 키울 수 있었습니다.
