# shisha-navi

## 技術スタック

- フロントエンド
  - Next.js App Router
  - TypeScript
  - Storybook
- バックエンド
  - Hono
  - TypeScript
  - Prisma
- DB
  - Supabase PostgreSQL
- 認証
  - Supabase Auth
- インフラ
  - フロントエンド: Vercel
  - バックエンド: Cloud Run

## 環境構築

```bash
$ git clone git@github.com:andmohiko/shishanavi.git
$ cd shishanavi
$ pnpm install
```

フロントエンドの起動

```bash
$ pnpm frontend dev
```

バックエンドの起動

```bash
$ pnpm backend dev
```

DB の起動

```bash
$ supabase start
```

Storybook の起動

```bash
$ pnpm frontend storybook
```
