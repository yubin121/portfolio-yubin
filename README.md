# 🍀 한유빈 포트폴리오

**프론트엔드 개발자 한유빈의 개인 포트폴리오 웹사이트**

<br />

## 🎉 배포 링크

🔗 **[바로가기]()**

<br />

## 💡 프로젝트 소개

사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 한유빈의 포트폴리오입니다.
<br>
책장을 콘셉트로 한 프로젝트 쇼케이스, 타이핑 애니메이션 히어로 섹션, 학습 이력을 Git 그래프로 시각화한 스킬 섹션 등 디테일한 인터랙션 요소로 구성되어 있습니다.

<br />

## 🌟 주요 기능

| 기능                            | 설명                                                                   |
| ------------------------------- | ---------------------------------------------------------------------- |
| 🚪 도어 오프닝 애니메이션       | 사이트 진입 시 두 패널이 열리는 인트로 효과                            |
| ✍️ 타이핑 애니메이션            | 직무명이 순서대로 타이핑되는 히어로 섹션                               |
| 📚 책장 프로젝트 쇼케이스       | 책을 클릭하면 페이지가 펼쳐지는 애니메이션으로 프로젝트 상세 정보 표시 |
| 🌿 Git 그래프 타임라인          | 학습 이력을 실제 Git 그래프 형태로 시각화                              |
| 🌙 다크 / 라이트 모드           | 토글 버튼으로 테마 즉시 전환                                           |
| 📊 스크롤 진행 바               | 네비게이션 하단에 스크롤 위치를 나타내는 보간 애니메이션 바            |
| ✨ 커서 트레일                  | 마우스 이동 시 파티클이 따라오는 인터랙션 효과                         |
| 📄 이력서 / 포트폴리오 다운로드 | PDF 파일 직접 다운로드 버튼                                            |

<br />

## 🔍 기술 스택

### Frontend

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)

### 서비스 배포 환경

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

### Tools

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=anthropic&logoColor=white)

<br />

## 🖥️ 프로젝트 구조

```
src/
├── assets/           # 이미지 등 정적 자원
├── components/       # UI 컴포넌트
│   ├── Hero.tsx        # 히어로 섹션 (타이핑 애니메이션, 프로필)
│   ├── AboutMe.tsx     # 자기소개 카드
│   ├── Skills.tsx      # 기술 스택 & Git 그래프
│   ├── Projects.tsx    # 책장 프로젝트 쇼케이스
│   ├── Book.tsx        # 개별 책 컴포넌트
│   ├── BookModal.tsx   # 프로젝트 상세 모달
│   ├── Career.tsx      # 경력 및 학력 타임라인
│   ├── Contact.tsx     # 연락처
│   ├── Navbar.tsx      # 네비게이션 바
│   ├── DoorOverlay.tsx # 인트로 도어 애니메이션
│   ├── CursorTrail.tsx # 커서 파티클 효과
│   ├── Fade.tsx        # 페이드인 래퍼
│   ├── GitGraph.tsx    # Git 그래프 시각화
│   ├── MagBtn.tsx      # 자기력 버튼
│   └── SectionHead.tsx # 섹션 헤더
├── data/             # 정적 데이터
│   ├── projects.ts     # 프로젝트 목록
│   ├── skills.ts       # 기술 스택 목록
│   ├── career.ts       # 경력/학력 데이터
│   ├── gitGraph.ts     # Git 그래프 데이터
│   └── nav.ts          # 네비게이션 링크
├── hooks/            # 커스텀 훅
├── types/            # TypeScript 타입 정의
├── utils/            # 유틸리티 함수
└── App.tsx           # 루트 컴포넌트
```

<br />

## ✨ 섹션 구성

1. **Hero** — 이름, 직무 타이핑 애니메이션, 프로필 이미지, CTA 버튼
2. **About Me** — 자기소개 / 개발 철학 / 목표 카드
3. **Skills** — 기술 스택 뱃지 + 학습 이력 Git 그래프
4. **Projects** — 책장 형태 프로젝트 쇼케이스
5. **Career & Education** — 학력 / 경력 타임라인
6. **Contact** — 이메일 / GitHub / 블로그 링크

<br />

## 라이선스

본 저장소는 포트폴리오 목적으로 제작되었습니다. 코드 및 디자인의 무단 복제를 금합니다.

---

© 2026 한유빈
