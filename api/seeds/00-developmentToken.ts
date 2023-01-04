import type {Knex} from "knex";

/**
 * This way we handle persistent static token for development purposes.
 * The token is being granted for the admin user!
 * On production, collection access must be set for the given user/role.
 */
export async function seed(knex: Knex): Promise<void> {
    await knex("directus_users")
        .where({email: process.env.ADMIN_EMAIL})
        .update({token: process.env.DEVELOPMENT_TOKEN});
}
