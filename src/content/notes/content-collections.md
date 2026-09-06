---
title: "Astro Content Collections — 스키마가 오타를 잡아주는 이유"
description: "Markdown frontmatter를 Zod 스키마로 검증하면 무엇이 달라지는지 정리."
date: 2026-09-06
tags: ["astro", "typescript"]
lang: "ko"
---

## 문제

정적 블로그에서 글이 늘어나면 frontmatter가 조용히 어긋난다. 어떤 글은
`tags`, 어떤 글은 `tag`. 어떤 글은 `date: 2026-01-02`, 어떤 글은
`date: "Jan 2, 2026"`. 목록 페이지에서 정렬이 깨지는 걸 보고 나서야 안다.

## 접근

Astro의 content collection은 컬렉션마다 Zod 스키마를 붙인다.

```ts
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

핵심은 두 가지다.

1. `z.coerce.date()` — 문자열이 들어와도 `Date` 객체로 통일된다. 정렬 코드에서
   타입 분기를 할 필요가 없다.
2. `.default([])` — 필드를 빼먹은 글도 깨지지 않는다. 대신 값이 있으면 형식을
   강제한다.

## 결과

스키마를 어기면 `astro build`가 실패한다. 즉 **깨진 글은 배포되지 않는다.**
런타임에 `undefined`를 만나는 대신 빌드 로그에서 파일 이름과 함께 잡힌다.

`draft: true`도 같은 원리로 쓴다. 쓰다 만 글을 마음 편히 커밋해두고,
프로덕션 빌드에서만 걸러낸다.
