/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('Tarefas', function(table) {
        table.increments('id');
        table.string('nome_tarefa').notNullable().unique();;
        table.string('descricao').notNullable();
        table.string('status').notNullable();
        table.string('responsavel').notNullable();
        table.foreign('id').references('id_projeto');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Tarefas')
};
