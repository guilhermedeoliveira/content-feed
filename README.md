# Content Feed

[App Link](https://content-feed-lac.vercel.app)

## Getting started

Install dependencies

```
npm install
```

Run application locally

```
npm run dev
```

## Basic commands

- `npm run` installs all dependencies
- `npm run dev` starts application in development mode with hot reload
- `npm run build` creates an optimized production build. The output displays information about each route
- `npm run start` starts the application in production mode. The application should be compiled with `npm run build` first

### Linting

- `npm run lint` lints the application.

### Typing

- `npm run type-check` checks typing

## Testing

- `npm run test:unit` runs unit tests
- `npm run test:unit:w` runs unit tests in watch mode

## Project structure

- `lib` where helpers, normalizers and third-party library functions should be placed. All function should be tested.
- `pages`: where all pages should be placed, Next.js will automatically [create routes](https://nextjs.org/docs/basic-features/pages)
- `modules`: where the domains are defined in isolation, for this project the only module is the feed domain
  - `feed` module
      - `components`: where all UI components are placed. These components should have no business logic
      - `data`: stores the data fetching logic
      - `types`: where TypeScript types are placed

## Deployment

This project has a [Vercel](https://vercel.com) CI/CD setup. In order to deploy it, you just need to push a commit to the main branch.

## API

### `/api/feed`

This endpoint fetches data from an external source to provide a feed of content.

- **Method**: GET
- **URL**: `/api/feed`
- **Headers**:
  - `Accept`: application/json
  - `Prefer`: code=200, dynamic=true

#### Response

The endpoint returns a JSON object with the following structure:

```json
{
  "contentCards": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "imageUri": "https://picsum.photos/500/500",
      "textData": {
        "title": "string",
        "subTitle": "string",
        "body": "This is the body",
        "author": {
          "first": "string",
          "last": "string"
        }
      },
      "metadata": {
        "priority": 100,
        "publishDate": "2019-08-24T14:15:22Z"
      },
      "comments": [
        {
          "text": "string",
          "author": "string",
          "profilePic": "https://picsum.photos/200",
          "likes": 0
        }
      ]
    },
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "imageUri": "https://picsum.photos/500/500",
      "textData": {
        "title": "string",
        "subTitle": "string",
        "body": "This is the body",
        "author": {
          "first": "string",
          "last": "string"
        }
      },
      "metadata": {
        "priority": 0,
        "publishDate": "2019-08-24T14:15:22Z"
      },
      "comments": [
        {
          "text": "string",
          "author": "string",
          "profilePic": "https://picsum.photos/200",
          "likes": 0
        }
      ]
    }
  ]
}
```
## Briefing

For my full-stack solution, I've decided to use a Next.js application with an API route to handle the content feed data. The decision was based on Next.js being a mature framework that offers server-side rendering out of the box, allowing me to choose between fetching data at build time or runtime. Due to the dynamic nature of the data, the application uses the getServerSideProps method to fetch data on a per-request basis. If the data were static, I would use getStaticProps to fetch the data at build time.

This app utilizes server-side rendering, ensuring that if JavaScript is disabled in the browser, data and styled-components' StyleSheet will still be fetched and rendered on the server, making the initial render unaffected.

To normalize and sanitize the data, I created a few helper functions, all of which have corresponding unit tests. The data normalization process is performed in src/modules/feed/data/service.ts.

For testing, I set up three types of tests:
- Unit testing for the helper functions
- API testing
- Home page testing with react-testing-library

### Considerations
Here is what I would do if this were a real project:
- Setup a complete CI/CD pipelie with linting, type checking, unit and integration testing, e2e and preview URLs
- Use environments variables for the api endpoint
- Improve repository and service files
