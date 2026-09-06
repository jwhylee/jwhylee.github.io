export const SITE = {
  name: 'Jaeyeol Lee',
  nameKo: '이재열',
  title: 'Jaeyeol Lee',
  description:
    'Applied Information Engineering @ Yonsei University. Notes and projects on AI systems, security, and the engineering in between.',
  url: 'https://jwhylee.github.io',
  email: 'jy_323@naver.com',
  github: 'https://github.com/jwhylee',
} as const;

export const NAV = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/notes', label: 'Notes' },
] as const;
