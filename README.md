# One Full Stack Boilerplate to Build them All (Feat: Next.js, Expo, PostgreSQL, NodeJS, Redux, NativeBase)

> One Boilerplate to Build them All, One Boilerplate to scale them, One Boilerplate to bring them all and in the darkness onboard them.

A Fullstack multiplatform application boilerplate for Expo and Next.js with NativeBase to reuse frontend code/designs.

## Setup Instructions

Create Expo app with Next.js for Expo for Web

```bash
npx create-react-native-app -t with-nextjs
```

## Usage

To run Web App: `yarn next dev` (Runs the dev server for Next.js).

To run Native App: `expo start` (Works just like regular expo flow).

To Build Web App (for deployment): `yarn build` (Builds the app for production just like with a normal Next.js project).

## Deployment

### Vercel

Add the following scripts to `package.json`:

``` json
    "scripts": {
        "build": "next build"
    }
```