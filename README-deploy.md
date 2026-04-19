# Bean & Brew — Deploy Instructions

## Deploy to Vercel

1. Push code to a GitHub repository
2. Log in to [Vercel](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Use default settings:
   - Framework: Auto-detected (Vite)
   - Root directory: project root
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click "Deploy"

Site will be live at the provided Vercel URL.

## Environment Variables

This app requires **no environment variables**.  
All functionality is static or client-side only.

## First-time setup

No setup required.

- No database
- No authentication
- No external services
- Contact form logs submissions to browser console only

Content is hardcoded in components. For dynamic content, integrate with an external headless CMS via client-side fetch (not implemented).