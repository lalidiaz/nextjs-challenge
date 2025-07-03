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

*Step 1:* Clone the repository
```
git clone git@github.com:lalidiaz/nextjs-challenge.git
```

*Step 2*: Install Dependencies
```
npm install
```

*Step 3*: Create prisma tables and populate with data from `seed.ts`
```
npx prisma db push
npx prisma db seed
```

*Step 4*: Open Prisma Studio
```
npx prisma studio
```
Prisma Studio is up on `http://localhost:5555`

*Step 5*: Build the application to create the PWA, two files will be created in `/public` directory based on the `manifest.json` placed in `/public`
```
npm run build
```

*Step 6*: Start the application in Dev mode
```
npm run dev
```
The application will be running at `http://localhost:3000`


## PWA - Progressive Web App

To access the PWA please follow these steps:

- Step 1: After building the app, a small download icon will appear in your browser's navigation bar. Click it to install the app.
- Step 2: Navigate to your download folder and open installed app.
- Step 3: Disconnect your device from the internet and test out the PWA application functionality, still works even if you are offline!

### Database

The project uses Prisma with SQLite. No separate installation is needed for SQLite (it's file-based and Prisma handles it automatically). The database file will be created automatically when you run the setup commands.

### Assumptions

All assumptions made during development can be found in the assumptions.md file at the root of the project.
