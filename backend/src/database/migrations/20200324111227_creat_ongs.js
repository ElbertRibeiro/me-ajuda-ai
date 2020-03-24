exports.up = function(knex) {
    knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNulllabel();
        table.string('email').notNulllabel();
        table.string('whatsapp').notNulllabel();
        table.string('city').notNulllabel();
        table.string('uf', 2).notNulllabel();
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
