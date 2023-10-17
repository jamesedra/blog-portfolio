# Web BlogFolio README

🔗 [Site URL](https://edra-blogfolio.vercel.app/)

<img src="/public/images/website.gif" alt="Website Screenshot" style="width: 70%">

## Description
This is the source code for my personal portfolio and blog website, showcasing my work and sharing my knowledge in various topics about software development.

## Stack
- **Frontend**: Next.js, TypeScript, [Tailwind CSS](https://tailwindcss.com/), [Chakra UI](https://chakra-ui.com/)
- **Backend** Node.js with [Nodemailer](https://nodemailer.com/)
- **API Integration**: [Github API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- **Markdown Processing**:- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Sitemap Generation**: [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

## Project structure

```
project-root/
│
├── app/
│   ├── api/   # api routes
│   ├── posts/ # post pages
│   ├── tag/   # tag page
│   ├── works/ # work page
│   ├── # page files
|
├── components/
│   ├── # TypeScript component files
|
├── lib/
│   ├── # TypeScript files for fetching post/work data
|
├── public/
│   ├── # static files for images and attachments
```

## Installation and Usage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

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

### Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

### Deploy on Vercel

You can deploy your Next.js app on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
