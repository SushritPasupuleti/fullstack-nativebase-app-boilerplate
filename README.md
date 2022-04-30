# One Full Stack Boilerplate to Build them All (Feat: NextJS, Expo, PostgreSQL, NodeJS, Redux, NativeBase)

> One Boilerplate to Build them all, One Boilerplate to scale them, One Boilerplate to bring them (users) all and in the darkness onboard them.

A Fullstack multiplatform application boilerplate for Expo and Next.js with NativeBase to reuse frontend code/designs.

## Setup

Install dependencies (first run only):

```bash
cd src/
yarn
```

Add a new dependency:

`cd` into specific folder, in `apps` or `packages` depending on what you are targeting.

```bash
yarn add x-package
```

## Run

To run the development server of Next.js:

```bash
yarn dev
```

To build and run the Next.js App:

```bash
cd src/apps/web/
yarn build
# wait for build to finish
yarn start
```

(No need to change anything when deploying to Vercel. [Instructions here](https://vercel.com/docs/concepts/git/monorepos))

To run the Expo App:

```bash
yarn native
```

To run the Express Server:

```bash
yarn server
```

> Recommend switching to pm2 for production.

## Stack

- Next.js for Web Front end (SSR+ISR+SSG support + full SEO).
- Expo for Mobile Front end (Fully native).
- PostgreSQL for Database with Sequelize ORM.
- NodeJS via Express for Backend.
- Redux for State Management.
- NativeBase for UI across both Next and Expo with shared components, layouts.
- Auth using Firebase for both.

## Showcase App

- Simple NavBar + Drawer with Login/Signup/Logout.
- Simple List of Posts with Search in Tabbed layout.
- Simple List of Users with Search in Tabbed layout.

(Everything managed via Redux)

## Can be scaled to

- Social Media App
- E-Commerce App
- Chat App
- Video Streaming App
- and the moon 🌕🚀
