import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Wibby',
    description: {
      summary: '올인원 스터디 모집 및 관리 플랫폼',
      sections: [
        {
          label: '서비스 소개',
          content:
            '단순한 스터디 매칭을 넘어 스터디의 모집 · 참여 · 운영 · 종료 전 과정을 통합적으로 지원합니다.',
        },
        {
          label: '차별점',
          content:
            '기존 스터디 서비스들이 모임 개설과 매칭 기능에만 국한된 것과 달리, 스터디 생성 이후의 지속적인 운영과 협업에 중점을 두었습니다.',
        },
      ],
    },
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Zustand', 'Vercel'],
    githubUrl:
      'https://github.com/prgrms-web-devcourse-final-project/WEB4_5_NeogulCoder_FE',
    demoUrl: '#',
    accent: '#c4b5fd',
    spine: '#5b21b6',
    thickness: 46,
    emoji: '🐰',
    period: '2025.06 – 2025.07',
    team: '프론트엔드 4명, 백엔드 5명',
    contribution: [
      { label: '기획', pct: 30 },
      { label: 'UIUX 설계', pct: 40 },
      { label: '프론트엔드 개발', pct: 40 },
      { label: '배포', pct: 100 },
    ],
    performance: [
      { label: '사용자 수', value: '배포 후 83명의 사용자 확보' },
      {
        label: '고객 만족도',
        value: '사용자 응답 결과 90% 이상의 만족도 기록',
      },
      { label: '시장 반응', value: "투표 결과에서 '우수 프로젝트'로 선정" },
    ],
    tags: [
      '프론트엔드 팀장',
      '반응형',
      '실시간 채팅',
      '팀 프로젝트',
      'SEO',
      '자동 배포',
    ],
  },
  {
    id: 2,
    title: "Cat's Paw",
    description: {
      summary: '낙서를 통해 소통하는 그림 퀴즈 게임',
      sections: [
        {
          label: '서비스 소개',
          content:
            '고양이 손을 빌린 듯한 귀여운 낙서를 그리고 맞히며 소통하는 웹 기반 게임입니다.',
        },
        {
          label: '차별점',
          content:
            '기존 유사 서비스들과 달리, 모든 유저가 동시에 그림을 그리고 정답을 맞히는 구조로 기다릴 틈 없이 몰입감 있게 게임을 즐길 수 있습니다.',
        },
        {
          label: '추가 기능',
          content:
            'AI 싱글모드를 제공하며, 점수를 통한 랭킹 확인도 가능합니다.',
        },
      ],
    },
    techStack: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Zustand',
      'Supabase',
      'Netlify',
    ],
    githubUrl: 'https://github.com/devcourse-catspaw/catspaw',
    demoUrl: '#',
    accent: '#7dd3fc',
    spine: '#0c4a6e',
    thickness: 30,
    emoji: '🐱',
    period: '2025.05 – 2025.06',
    team: '프론트엔드 4명',
    contribution: [
      { label: '기획', pct: 30 },
      { label: 'UIUX 설계', pct: 30 },
      { label: '프론트엔드 개발', pct: 40 },
      { label: '배포', pct: 100 },
    ],
    performance: [
      { label: '사용자 수', value: '배포 후 40명의 사용자 확보' },
      {
        label: '고객 만족도',
        value: '사용자 응답 결과 98% 이상의 만족도 기록',
      },
      {
        label: '시장 반응',
        value: "실사용자에게서 '시간 가는 줄 모르고 하게 된다' 등 긍정적 평가",
      },
    ],
    tags: ['프론트엔드 팀장', '팀 프로젝트', '실시간성', 'DB 설계'],
  },
  {
    id: 3,
    title: 'LateMate',
    description: {
      summary: '실시간 동선 공유 기반 지각 방지 서비스',
      sections: [
        {
          label: '서비스 소개',
          content:
            '약속을 생성하고 실시간 위치를 공유하며, 누가 지각할지 자동으로 예측해주는 약속 관리 웹 서비스입니다. 회원가입 없이 코드 접속만으로 참여할 수 있습니다.',
        },
        {
          label: '차별점',
          content:
            '카카오톡 라이브 위치: 단발성, 약속 관리 기능 없음. 구글 맵 위치 공유: UX 불편, 한국 지도 정확도 낮음. 밴드/네이버 약속: 실시간 위치 공유 없음.',
        },
      ],
    },
    techStack: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'TanStack Query',
      'Zustand',
      'Claude Code',
      'Supabase',
      'Vercel',
    ],
    githubUrl: 'https://github.com/yubin121/latemate',
    demoUrl: 'https://latemates.vercel.app/',
    accent: '#6ee7b7',
    spine: '#064e3b',
    thickness: 54,
    emoji: '🕹️',
    period: '2026.05 – 2026.05',
    team: '개인',
    contribution: [
      { label: '기획', pct: 100 },
      { label: 'UIUX 설계', pct: 100 },
      { label: '프론트엔드 개발', pct: 100 },
      { label: '배포', pct: 100 },
    ],
    performance: [],
    tags: ['개인 프로젝트', '모바일', '실시간성', 'AI', '자동 배포'],
  },
  {
    id: 4,
    title: 'Looply',
    description: {
      summary: '오늘의 상태에 맞게 루틴을 조정해주는 생활 리듬 관리 서비스',
      sections: [
        {
          label: '서비스 소개',
          content:
            '사용자의 컨디션, 일정, 생활 리듬에 맞춰 오늘 실천 가능한 루틴을 관리하도록 돕는 모바일 중심 루틴 관리 앱입니다.',
        },
        {
          label: '차별점',
          content:
            '기존 루틴 앱이 사용자가 직접 루틴을 만들고 체크하는 데 집중한다면, Looply는 사용자의 하루 상태에 따라 루틴을 가볍게 조정하고, 실패보다 복귀를 돕는 경험을 핵심 가치로 둡니다.',
        },
      ],
    },
    techStack: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'TanStack Query',
      'Zustand',
      'Claude Code',
      'Supabase',
      'Vercel',
    ],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#fca5a5',
    spine: '#881337',
    thickness: 36,
    emoji: '🧠',
    period: '2026.05 – 2026.06',
    team: '개인',
    contribution: [
      { label: '기획', pct: 100 },
      { label: 'UIUX 설계', pct: 100 },
      { label: '프론트엔드 개발', pct: 100 },
      { label: '배포', pct: 100 },
    ],
    performance: [],
    tags: ['개인 프로젝트', '모바일', 'AI', '모노레포', '자동 배포'],
  },
  {
    id: 5,
    title: 'Portfolio',
    description: {
      summary: '프론트엔드 개발자 포트폴리오',
      sections: [
        {
          label: '서비스 소개',
          content: '프론트엔드 개발자를 소개하는 포트폴리오 사이트입니다.',
        },
        {
          label: '활용 AI',
          content: 'Claude Code를 활용하여 만든 바이브코딩 사이트입니다.',
        },
      ],
    },
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Claude Code', 'Vercel'],
    githubUrl: 'https://github.com/yubin121/portfolio-yubin',
    demoUrl: 'https://hanyubin.vercel.app/',
    accent: '#fcd34d',
    spine: '#78350f',
    thickness: 43,
    emoji: '🍀',
    period: '2026.05 – 2026.05',
    team: '개인',
    contribution: [
      { label: '기획', pct: 100 },
      { label: 'UIUX 설계', pct: 100 },
      { label: '프론트엔드 개발', pct: 100 },
      { label: '배포', pct: 100 },
    ],
    performance: [],
    tags: ['개인 프로젝트', '반응형', 'AI', '자동 배포'],
  },
];
