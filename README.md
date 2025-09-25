# Repareo Frontend Coding Challenge

A small Next.js project implementing a reusable, responsive Stepper component styled with Tailwind CSS and covered by unit tests.

## Live Demo

- Live preview: [`https://frontend-coding-challenge-rose-phi.vercel.app/`](https://frontend-coding-challenge-rose-phi.vercel.app/)

## Features

- Responsive stepper that supports multiple rows when there are many steps
- Always-visible horizontal connectors that visually attach to the circles within each row
- Works with arbitrary step lists and different current step values
- Simple API with optional `maxStepsPerRow` to control wrapping
- Tested with React Testing Library + Jest

## Tech Stack

- Next.js
- React 18
- Tailwind CSS
- Jest + @testing-library/react
- TypeScript

## Getting Started

1) Install dependencies:
```bash
npm install
```

2) Start the development server:
```bash
npm run dev
```
Visit [`http://localhost:3000`](http://localhost:3000).

3) Run tests:
```bash
npm run test
```

## Usage

The Stepper is used on the home page and can be configured via `steps`, `currentStep`, and optionally `maxStepsPerRow`.

```tsx
<Stepper steps={steps} currentStep={currentStep} maxStepsPerRow={4} />
```

## Project Structure

```text
__tests__/
  components/
    repareo/
      button.test.tsx
    stepper/
      stepper.test.tsx
components/
  repareo/
    button.tsx
    buttonWrapper.tsx
    header.tsx
    mainWrapper.tsx
    stepperWrapper.tsx
  stepper/
    stepper.tsx        <- Stepper component
    steps.ts           <- Step configuration type/helpers
hooks/
  useStepper.ts        <- Custom hook for step navigation
pages/
  index.tsx            <- Main page (renders the stepper)
```

## Implementation Notes

- The stepper supports wrapping into multiple rows; connectors render within a row so lines stay clean and visually connected to circles on all devices.
- Styling is done with Tailwind CSS, no extra packages required.

## Design Spec

- Figma reference: [`Frontend-Coding-Challenge`](https://www.figma.com/design/gvf4xjR6f9rvaj94BPFFyZ/Frontend-Coding-Challenge?node-id=0-1&t=tHGuIxWbpBVVsH5B-1)

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production bundle
- `npm start` — run production server
- `npm run test` — run unit tests

## Deployment

The project can be deployed to Vercel. A live instance is available here:

- [`https://frontend-coding-challenge-rose-phi.vercel.app/`](https://frontend-coding-challenge-rose-phi.vercel.app/)

---

Made with Next.js, Tailwind, and Testing Library.
