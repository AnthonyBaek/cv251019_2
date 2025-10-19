# 1. 개발 목표

우리는 소프트웨어 엔지니어의 CV Web App을 Modern, Simple, Sleek하게 만들고자 해.

# 2. 초기 요구사항

구현 대상 및 범위:
- 순수 HTML 구조로 구현 (index.html, script.js, style.css)
   - 3개 외의 파일이 생성되지 않아야 함
- Back-End (Server, DB) 의 구현은 필요 없음

화면 및 데이터:
- 원페이지로 구성하며, 헤더의 메뉴를 클릭하면 해당 위치 앵커로 스크롤
- CV 데이터는 JSON으로 생성하여 관리
   - CV에 포함되는 데이터(예. Projects, Skills 등)는 설계 후 진행
   - 초기 버전에 포함되는 데이터는 모두 Fake Data를 활용
- 프로필 사진은 루트 디렉토리 내 `profile.png` 사용

비기능:
- 폰트는 Noto Sans KR 활용
- 한글/영어 모드 지원
- 연회색 계열의 Light Mode만 지원