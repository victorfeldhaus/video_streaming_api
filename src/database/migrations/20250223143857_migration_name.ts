import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    knex.raw(`
            CREATE TABLE IF NOT EXISTS user
            id INT 
        `)
}


export async function down(knex: Knex): Promise<void> {
}

