const { now } = require("tarn/dist/utils");

exports.up = knex => {
    knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username').unique().notNullable()
    table.text('useradress').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = knex => {
     knex.schema.dropTable('users')
}
