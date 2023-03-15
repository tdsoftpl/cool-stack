import {Collection, Status} from "../types";
import type {Knex} from "knex";
import type {Article} from "../types";

export async function seed(knex: Knex): Promise<void> {
    await knex(Collection.Articles).del();

    const user = await knex(Collection.Users).where({email: process.env.ADMIN_EMAIL}).first();
    const articles: Array<Article> = [
        {
            id: 1,
            status: Status.Published,
            date_created: "2023-01-01T12:00:00",
            date_updated: null,
            author: user.id,
            slug: "remix-vs-next",
            title: "Remix vs Next.js",
            content: `<h2>TL;DR</h2><ul><li>Remix is as fast or faster than Next.js at serving static content</li><li>Remix is faster than Next.js at serving dynamic content</li><li>Remix enables fast user experiences even on slow networks</li><li>Remix automatically handles errors, interruptions, and race conditions, Next.js doesn't</li><li>Next.js encourages client side JavaScript for serving dynamic content, Remix doesn't</li><li>Next.js requires client side JavaScript for data mutations, Remix doesn't</li><li>Next.js build times increase linearly with your data, Remix build times are nearly instant and decoupled from data</li><li>Next.js requires you to change your application architecture and sacrifice performance when your data scales</li><li>We think Remix's abstractions lead to better application code</li></ul><a href="https://remix.run/blog/remix-vs-next"><p>Read full article</p></a>`
        },
        {
            id: 2,
            status: Status.Published,
            date_created: "2023-01-01T12:00:00",
            date_updated: null,
            author: user.id,
            slug: "everything-you-need-to-know-about-directus-roles",
            title: "Everything you need to know about Directus Roles",
            content: `<p>In Directus, there is a User Management module where you can add new users to your platform. By default, Directus only has 2 roles available for these users, Public (no access) and Adminisrator (full access). In this article I will cover how you can create and use Roles to build a successful team and secure your application.</p><p><strong>Roles are a core feature of Directus that controls how your users interact with the data. It can be as simple as read and write access or as complex as specific fields within a collection. It's good practice to create a new role for each new user or team and limit their access to what they need. You can always grant access when something else is required.</strong></p><a href="https://learndirectus.com/everything-you-need-to-know-about-directus-roles/"><p>Read full article</p></a>`
        },
        {
            id: 3,
            status: Status.Published,
            date_created: "2023-01-01T12:00:00",
            date_updated: null,
            author: user.id,
            slug: "how-to-backup-directus",
            title: "How to backup Directus",
            content: `<p><strong>To backup Directus, make a copy of your project files, .env file and perform a data dump of your database.</strong></p><h2 id="backing-up-a-project">Backing-up a Project</h2><p>It is important to make a backup of your project in case everything goes very badly. Some updates will make changes to your database which will making rolling back to previous versions impossible.</p><ol><li>Make a copy of the <strong>files within each storage adapter</strong>, and store them in a safe place. This can be a zip/tar file somewhere on the same server so you can easily extract them again if needed. If space is an issue, the backup can be stored elsewhere once you are happy the update has succeeded.</li><li>Make a copy of the <strong>Env file</strong> (<code>/project_folder/.env</code>), and store it in a safe place. This contains all your configurations.</li><li>Create a database dump (a sql backup of your database)</li></ol><a href="https://learndirectus.com/how-to-backup-directus/"><p>Read full article</p></a>`
        }
    ];

    await knex(Collection.Articles).insert(articles);
}
