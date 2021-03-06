import { Knex } from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.float('price').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('products')
}