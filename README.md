# STLB Rework Dashboard - Next.js Conversion

This is a Next.js/Vercel-ready version of the STLB Rework Dashboard.

## What this first conversion does

This V1 conversion preserves the existing dashboard exactly by placing the latest HTML dashboard in:

```text
public/dashboard.html
```

The Next.js app wraps that file from `app/page.tsx` using an iframe and also gives users a fullscreen dashboard link.

This approach is intentional for the first deployment because it keeps the current Excel upload, defect map, trailer reports, and print/PDF behavior working while giving you a valid Next.js project that can be pushed to GitHub and connected to Vercel.

## Local setup

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Deploying to Vercel

1. Create a new GitHub repository.
2. Push this project folder to GitHub.
3. In Vercel, choose **Add New Project**.
4. Import the GitHub repository.
5. Vercel should detect Next.js automatically.
6. Deploy.

## Recommended next phase

After this is deployed and validated, the best next step is to refactor the single HTML file into real React components:

```text
components/ExcelUploader.tsx
components/KpiCards.tsx
components/DefectMap.tsx
components/BreakdownCharts.tsx
components/TrailerReport.tsx
components/DefectLog.tsx
lib/parseExcel.ts
lib/defectCalculations.ts
```

That second phase will make the app easier to maintain and improve visually.
