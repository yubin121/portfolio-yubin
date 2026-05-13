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
    emoji: '🔗',
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
    tags: ['프론트엔드 팀장', '반응형', '실시간 채팅', '팀 프로젝트'],
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
    title: 'TFM',
    description: {
      summary: 'TFM 대표 웹사이트',
      sections: [
        {
          label: '주요 작업',
          content:
            '기존 디자인 시스템을 최신 스타일로 재구축하고 주요 페이지를 반응형으로 재설계하였습니다.',
        },
        {
          label: '성과',
          content:
            '반응형으로 재설계함으로써 모바일 방문 고객의 사이트 이용 편의성을 높였습니다.',
        },
      ],
    },
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#6ee7b7',
    spine: '#064e3b',
    thickness: 54,
    emoji: '📋',
    period: '2023.01 – 2023.02',
    team: '프론트엔드 개발 인턴',
    contribution: [
      { label: '기획', pct: 30 },
      { label: '프론트엔드 개발', pct: 90 },
    ],
    performance: [],
    tags: ['반응형', '디자인'],
  },
  {
    id: 4,
    title: 'K-ESG',
    description: {
      summary: 'K-ESG 설문조사 및 리포팅 서비스',
      sections: [
        {
          label: '주요 작업',
          content:
            '사용자 입력 데이터를 기반으로 하는 설문 페이지와 결과 리포트 UI를 구현했으며, 시각적 요소(디자인 시안)를 코드로 정확하게 전환하는 역할을 맡았습니다.',
        },
        {
          label: '성과',
          content:
            '데이터 및 사용자 설정에 따라 다른 리포트 UI가 프린트됨으로써 사이트 사용자 이탈률을 감소시켰습니다.',
        },
      ],
    },
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: '#',
    demoUrl: '#',
    accent: '#fca5a5',
    spine: '#881337',
    thickness: 36,
    emoji: '🧠',
    period: '2023.04 – 2024.05',
    team: '프론트엔드 개발 인턴',
    contribution: [
      { label: '기획', pct: 30 },
      { label: 'UIUX 설계', pct: 90 },
      { label: '프론트엔드 개발', pct: 90 },
    ],
    performance: [],
    tags: ['데이터', '디자인', '프린트'],
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
    githubUrl: '#',
    demoUrl: '#',
    accent: '#fcd34d',
    spine: '#78350f',
    thickness: 24,
    emoji: '⚒️',
    period: '2026.05 – 2026.05',
    team: '개인',
    contribution: [],
    performance: [],
    tags: ['개인 프로젝트', 'AI', '자동 배포'],
  },
];
