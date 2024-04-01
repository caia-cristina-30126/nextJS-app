This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

ESLint: [ESLint configuration](https://gourav.io/blog/nextjs-cheatsheet#add-eslint-to-nextjs-typescript-project)

## What could be done to improve UI experience / functionality:

1. Filtering categories by ID, so from the Home page, the user can click on one of the category and redirect to the products of that category.
2. A button placed on All products and Create product pages that redirects to the Home page.
3. CODE CLEANING: use Image from "next/image" instead of html <img /> tag ( which requires some configs in next.config.js.) .Also, could be nice to have a single ImageComponent in components folder and reuse this component.
4. If the Category id doesn not exists, an alert should be displaying the error message / Category id could be a select and the user can select from the categories ids that already exist.
5. A better user experience on the Create Product page:
   I. On submit, image URL field can be empty after at least one image is added;
   II. The user can have the possibility to delete the URL;
6. A better user experience after the creation of the product: The response is displayed in an alert/snackbar so they can continue creating new products withoud having to return to Home page --> Create new product.
7. Manage the invalid images URL's ( on Home and Products pages).
