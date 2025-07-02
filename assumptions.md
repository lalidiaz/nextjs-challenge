# Assumptions

This document outlines the key assumptions made during the development of this challenge. It serves to clarify implementation decisions, justify simplifications, provide transparency for reviewers and expose risks and limitations.

## Technical Stack Assumptions

- **Framework:** Next.js 15+ with App Router.
- **Language:** TypeScript for type safety.
- **Styling:** Tailwind CSS.
- **Database:** Prisma ORM with SQLite.
- **Node.js:** Version 18+ required.

### Development Configuration Decisions

**Prisma Client Best Practices using Nextjs (`/lib/prisma.ts`):** Implemented to prevent multiple client instances during Nextjs hot-reloading. Next.js's development server frequently reloads modules, which can create multiple Prisma Client instances, consuming resources and causing unexpected behavior. The configuration ensures client reuse across reloads, following Prisma's recommended approach for Nextjs applications. [Prisma's best practices for Next.js development](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help)

### Mock Data Strategy

- Mock data simulates realistic API responses for demonstration purposes.
- Data persistence is not required for this challenge.
- API endpoints return seeded data rather than dynamic database queries.

### Database Schema Decisions

- Prisma schema included for seeding and type generation in `/prisma/schema.prisma`.
- **Intentionally Omitted Fields:** `createdAt` and `updatedAt` timestamps.
  - _Production Note:_ These would be essential in real-world applications.

### Optional Field Rationale

- **Phone (phone?):** Not all users have or want to provide phone numbers.
- **Website (website?):** Not all users have a website.
- **Suite (suite?):** Not all addresses include suite/apartment/unit numbers.
