exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
    table.increments('id')
    table.text('nome').unique().notNullable()
    table.text('endereco').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
     return knex.schema.dropTable('usuarios')
}
