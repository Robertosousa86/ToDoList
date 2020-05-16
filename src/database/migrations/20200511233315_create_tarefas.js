exports.up = function (knex) {
  return knex.schema.createTable('tarefas', function (table) {
    table.increments('id').unsigned().primary();
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.string('urgencia').notNullable();
    table.timestamp('criada_em').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('tarefas');
};