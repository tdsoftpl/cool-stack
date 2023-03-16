<div align="center">
<img src="https://i.imgur.com/J7EdGWq.png" alt="Cool-Stack Cover" />
</div>

<h3 align="center">
   Ice-cool 🧊 Remix + Directus starter template.
</h3>

<br/>
<!-- <hr/> -->

<div align="center">
    <a href="https://www.tdsoft.com">
      by  <img width="80" src="https://imgur.com/8KJixsV.png" alt="TDSOFT Logo" /> - Directus Experts
    </a>
</div>
<hr/>
<br/>

## Overview 🔭

🧊 _cool-stack_ 🧊 is a modern stack for building web applications. It's built on top of two powerful tools:

-   💿 Remix - blazingly fast, powerful React.js framework that is used for server-side rendering, allowing you to focus on creating beautiful user interfaces.

-   🐰 Directus - an instant REST and GraphQL API that seamlessly integrates on top of a Postgres SQL database. Directus has an easy to work with SDK, that blends perfectly with Remix.

<h4 align="center"> 
   <b> ❄️ Get <i>cool-stack</i> today, before your time melts away ❄️ </b> 
</h4>

## What's _cool_ in the stack? ✨

-   [Remix](https://remix.run/) as a web framework (using [Architect](https://arc.codes/))
-   Content API and dashboard powered by [Directus](https://directus.io/)
-   [PosgreSQL](https://www.postgresql.org/) + [pgAdmin](https://www.pgadmin.org/) for data persistence
-   API seeding with [Knex.js](https://knexjs.org/) for local development
-   [Tailwind CSS](https://tailwindcss.com/) for styling
-   [Storybook](https://storybook.js.org/) for UI development
-   [Turborepo](https://turbo.build/repo) as a monorepo and build system
-   [Cypress](https://cypress.io) - E2E testing framework
-   Unit testing with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com)
-   Code formatting with [Prettier](https://prettier.io)
-   Linting with [ESLint](https://eslint.org)

## Prerequisites

-   [node](https://nodejs.org/) - at least v14
-   [yarn](https://yarnpkg.com/) - at least v1.22.19
-   [Docker Desktop](https://docs.docker.com/desktop/) - for spinning up your local PosgreSQL database & pgAdmin. If you don't want to run a database on your local machine, you can use the free tier of [Directus cloud services](https://directus.cloud/)

## How to start

-   Run `yarn run bootstrap` - that will install and build all the project dependencies & packages
-   Run `yarn run dev` - turborepo will spin up all 'dev' scripts across the monorepo. You can also run each project's dev scripts separately
-   Log in to your directus dashboard using these credentials `user: admin@example.com | password: admin`
-   For production usage, make sure to fill in your `.env` files in api & page directories. It's best not to version these files in your repository

## Deployment

### Page

The Remix app in this repository comes with an [Architect](https://arc.codes/) adapter, as it's working best for our use cases.

Refer to [architect's docs](https://arc.codes/docs/en/reference/cli/deploy) for the a detailed guide on that topic.

### API

Refer to [directus docs](https://docs.directus.io/self-hosted/quickstart.html) for a guide on how to deploy a self-hosted directus instance.

We recommend deploying to [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html) using Docker.

<hr/>

<h3 align="center">
   <a href="https://directus.io/blog/imt-01-building-a-sports-betting-platform-with-directus/">Watch episode of "Directus I-MADE-THIS" podcast</a>
</h3>

<div align="center">
    <a href="https://directus.io/blog/imt-01-building-a-sports-betting-platform-with-directus/">
        <img src="https://i.imgur.com/MwsnLuD.png" alt="Directus I-MADE-THIS podcast cover" />
    </a>
</div>

<hr/>

## Built with cool-stack

-   [BettorSignals](https://bettorsignals.com/) - Multi-channel sports tipping platform
