
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //cria uma chave primaria com auto-increment

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //coluna pra armazenar qual ong criou este incident (relacionamento)
        table.string('ong_id').notNullable(); // deve ser string pois o id da ong foi definido comm string

        //chave estrangeira ou foreign key
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('incidents');
};
