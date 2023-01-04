<h3 align="center">
   <img src="./page/public/images/cool-stack-logo.png" alt="Cool-Stack Logo" />
   <br/>
   Ice-cool 🧊 Remix + Directus starter template.

   <br/>The ultimate stack for your next project.
   <br/>Built with the latest technology in the industry.
</h3>

## What's in the stack

- [Remix](https://remix.run/) as a web framework
- Real-time API and app dashboard with [Directus](https://directus.io/)
- Dockerize [MySQL](https://www.mysql.com/) as a project database
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Unit testing with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)
- AWS deployment with [Architect](https://arc.codes/)
- Frontend workshop with [Storybook](https://storybook.js.org/)
- [Turborepo](https://turbo.build/repo) as a monorepo and build system

## Projects using Cool-Stack:

- [Bettorsignals](https://bettorsignals.com/) - a system that allows sending out short affiliate sports tips in the form of news, posts and lists on the website.

<sub><sup>The list will be kept updated... 😉</sup></sub>

## Development:
- This step will install all necessary dependencies, generate CSS files and build the remix app:
```sh
yarn run bootstrap
```
### Run Directus:
***Note** The following steps are optional. If you don't want to run Directus on your local machine, you can use the free tier of [Directus cloud services](https://directus.cloud/).*

- Ensure the Docker application is running and up to date on your local machine.

- Based on the `.env.example` file, create a `.env.local` file in the "./api" directory. Fill in the variables `DEVELOPMENT_TOKEN=`, `ADMIN_EMAIL=` and `ADMIN_PASSWORD=`.

- This step will run the local MySQL database in the docker container, initialize the Directus server and inject a snapshot of the Directus schema along with the mocked data:
```sh
yarn run dev:local
```

### Run Remix app:

- Create a `.env` file in the "./page" directory with the variables based on the `.env.example` file.
- Run the command:
```sh
yarn run dev
```


## Recommend Deployment:

The **Remix** application comes with an [Architect](https://arc.codes/) that simplifies deploying to AWS services.

- Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to the [arc environment](https://arc.codes/docs/en/reference/cli/env).
- Ensure that the IAM profile you specified the keys for has the correct permissions.
- Run the command:
```sh
npx arc deploy --production
```

On the other hand, the **Directus** application is recommended by us for deployment in the [Elastic Beanstalk service](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html) as the most convenient way.
However, deployment in AWS services can involve many steps. Hence we recommend sticking to [Directus documentation](https://docs.directus.io/self-hosted/installation/aws.html).

## Tools:

### Storybook
To isolate the presentation components, we use [Storybook](https://storybook.js.org/) as a frontend workshop. It simplifies the application development and testing process by coding smaller application parts.

To run the Storybook, just run the `yarn run dev` command in the `./packages/ui` directory. And to add a new story for your component, just create a file with the extension `.stories.tsx` in the component's directory and provide the appropriate parameters.

### Cypress

We use Cypress for our End-to-End tests in the Remix app. You'll find those in the cypress directory. As you make changes, add to an existing file or create a new file in the cypress/e2e directory to test your changes.

To run these tests, run `yarn run test:e2e:run`, which will start the dev servers and the Cypress client.

### Jest
For lower-level tests of utilities and individual components, we use Jest. Jest is configured in the `./page` and `./packages/ui` directories.
To modify or create new tests, simply create a file with extensions `*.test.ts, *.test.tsx`...

### Linting
This stack uses ESLint with unicorn roles for linting. That is configured in .eslintrc.js.

### Formatting
We use Prettier for auto-formatting in this project. Installing an editor plugin (like the VSCode Prettier plugin) is recommended to get auto-formatting on save.
