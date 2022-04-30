# One Full Stack Boilerplate to Build them All (Feat: NextJS, Expo, PostgreSQL, NodeJS, Redux, NativeBase)

> One Boilerplate to Build them all, One Boilerplate to scale them, One Boilerplate to bring them (users) all and in the darkness onboard them.

A Fullstack multiplatform application boilerplate for Expo and Next.js with NativeBase to reuse frontend code/designs.

Projects you should look into: 

- [Solito](https://solito.dev/): To generate a similar monorepo as well as to perform navigation and routing that works with both Next.js and Expo. (The MVP of this approach).

- [NativeBase](https://nativebase.io/): For their excellent UI library that can be used in both Expo and Next.js (The next candidate for MVP).

- [Turborepo](https://turborepo.org/): To work with monorepos.


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

- Next.js for Web Front end (SSR+ISR+SSG support + full SEO with [next-seo](https://www.npmjs.com/package/next-seo)).
- Expo for Mobile Front end (Fully native).
- NodeJS via Express for Backend.
- Redux for State Management.
- NativeBase for UI across both Next and Expo with shared components, layouts.

Recommendations:

- PostgreSQL for Database with Sequelize ORM.
- Auth using Firebase for both.

## Can be scaled to

- Social Media App
- E-Commerce App
- Chat App
- Video Streaming App
- and the moon 🌕🚀
