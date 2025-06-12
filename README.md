## 📝 What I implemented and why

- Used **Next.js (App Router)** with **TypeScript** to create a clean and scalable project structure.
- Integrated **Apollo Client** to fetch data from the provided GraphQL API.
- Wrapped the entire app with global providers for **Apollo** and **Chakra UI** for easy state and UI management.
- Used **Chakra UI** for layout and UI components to ensure a consistent design system and responsive layout.
- For visualizing country measures, I selected **Recharts** as a simple, lightweight, and effective charting library.
- Since there are only a few available measures, I used **Radio Buttons** instead of a second dropdown to simplify user interaction and improve UX.
- The app is fully **responsive** and works well across different screen sizes.
- Included helpful messages for cases where no data is available for a selected country and measure combination, including smooth entry animations for better user feedback.

## 🚫 What I chose not to implement

- Map-based country selection or visualization (due to time constraints).
- Alphabetical sorting for the country list.
- Summary display for the most recent data point.

## 💡 What I’d do next with more time

- Add an interactive world map for country selection.
- Alphabetically sort countries.
- Display the most recent year's value below the chart.
- Improve accessibility (ARIA, keyboard navigation, focus management).
- Improve empty-state experience.

## ⏱️ Time Spent

- Actual implementation: ~2 hours (timeboxed)
- Preparation and learning: ~4 hours over several evenings




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
