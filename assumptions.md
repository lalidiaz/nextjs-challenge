# Assumptions

This document outlines the key assumptions made during the development of this challenge. It serves to clarify implementation decisions, justify simplifications, provide transparency for reviewers and expose risks and limitations.

## Tech Stack

- **Framework:** Next.js 15+ with App Router.
- **Language:** TypeScript for type safety.
- **Styling:** Tailwind CSS.
- **Database:** Prisma ORM with SQLite.
- **Node.js:** Version 18+ required.

### Development Configuration Decisions

**Prisma Client Best Practices using Nextjs (`/lib/prisma.ts`):** Implemented to prevent multiple client instances during Nextjs hot-reloading. Next.js's development server frequently reloads modules, which can create multiple Prisma Client instances, consuming resources and causing unexpected behavior. The configuration ensures client reuse across reloads, following Prisma's recommended approach for Nextjs applications. [Prisma's best practices for Next.js development](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help)

### Mock Data Strategy

- Mock data simulates realistic API responses for demonstration purposes.
- API endpoints return seeded data.

### Database Schema Decisions

- Prisma schema included for seeding and type generation in `/prisma/schema.prisma`.
- **Intentionally Omitted Fields:** `createdAt` and `updatedAt` timestamps.
  - _Production Note:_ These would be nice to have in the future if we want to add publication date in the blog post.

#### Optional Field Rationale 

- **Phone (phone?):** Not all users have or want to provide phone numbers.
- **Website (website?):** Not all users have a website.
- **Suite (suite?):** Not all addresses include suite/apartment/unit numbers.

### Error Handling & Edge Cases

#### Robust Error Handling Implementation

- User Not Found: The app gracefully handles cases where a user ID doesn't exist in the database.
- No Posts Scenario: When a user has no posts, an appropriate message is displayed instead of an empty list.
- Invalid Query Parameters: String inputs like abc in userId query parameters are safely handled without breaking the application.
- Prisma-Specific Errors: Proper error handling for database connection issues, constraint violations, and other Prisma-specific errors.
- API Failures: Both post retrieval and deletion failures display user-friendly error messages.

### Performance & Optimization Assumptions
- Implemented `unstable_cache` from Nextjs to cache the results of database queries. I'm aware that `unstable_cache` API will be replaced by `use cache` when it reaches stability, in that case would be necessary to update in the future.

### Progressive Web App (PWA) Implementation
- Offline Support: PWA features implemented to provide offline access for users with poor internet connections.

### Security & Authentication Assumptions

- No Authentication Required: Authentication is not implemented given the scope of the challenge.
- Production Consideration: In real-world scenarios, authentication would be essential to ensure only post authors can delete their own posts.
- Authorization Logic: Currently, any user can delete any post, which would require proper authorization in production.
- Only authenticated authors should be allowed to add posts.

### Data Security

Environment Variables: Database connection details are intentionally included in the repository as requested (acknowledging this as a bad practice).

### Mobile-First Design

Responsive Design: Mobile-first approach ensures optimal experience across all device sizes.

### Accessibility Considerations

Semantic HTML: Proper use of semantic HTML elements for screen readers.

### Future Enhancements (If More Time Available)
#### Improvements

- Authentication System: Implement proper user authentication.
- Logging Infrastructure: Add comprehensive logging for better debugging and monitoring.
- LLMs.txt Standard: Put into practice the suggested web standard, which serves as an organized manual for AI systems. Similar to [Vercel's llms.txt](https://vercel.com/docs/llms.txt), this file helps AI assistants quickly access and process project information by providing a prioritized list of URLs and concise summaries of website content.

#### Additional Features
- Advanced Filtering: Enable users to select more than one author.
- Blog Post page.
- Author's page.
- Image Upload: Support for post images and media.

