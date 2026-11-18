import "@testing-library/jest-dom/vitest";

// Mirrors next.config.ts trailingSlash: true so next/link keeps trailing slashes in tests.
process.env.__NEXT_TRAILING_SLASH = "true";
