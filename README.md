# Nextjs Challenge ✨👩🏽‍💻

This app is built using Next.js. It renders posts at `/posts/`, where it is possible to view all posts, view posts by specific author, and delete posts.

The app comes with features and changes that make a better user experience, with the whole app functioning anywhere with poor or unstable internet.

## Folder Structure

```
.
├── actions/
│   └── post-actions.ts
├── app/
│   ├── components/
│   │   ├── /modal.tsx
│   │   ├── /postCard.tsx
│   │   └── /userFilter.tsx
│   ├── posts/
│   │   └── /page.tsx
│   ├── globals/
│   ├── layout/
│   └── page.tsx
├── lib/
│   ├── prisma-utils.ts
│   ├── prisma.ts
│   └── queries.ts
├── prisma/
│   ├── /schema.prisma
│   └── /seed.ts
├── .env
└── assumptions.md
```

## Setup Instructions

### Prerequisites

- Node.js >= 18.x
- npm (v9+) or yarn
- A modern web browser
- A `.env` file with required environment variables at the root of the project.

### Installation

```
git clone git@github.com:lalidiaz/nextjs-challenge.git
npm install

<!-- Prisma -->
npx prisma init --datasource-provider sqlite
npx prisma db push
npx prisma studio
npx prisma db seed

npm run dev
```

### Database

The project uses Prisma with SQLite. No separate installation is needed for SQLite (it's file-based and Prisma handles it automatically). The database file will be created automatically when you run the setup commands.

### Assumptions

All assumptions made during development can be found in the assumptions.md file at the root of the project.
