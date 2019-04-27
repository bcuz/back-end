exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();
    tbl.string("username", 255).notNullable();
    tbl.string("firstName", 255).notNullable();
    tbl.string("lastName", 255).notNullable();
    tbl.integer("age");
    tbl
      .integer("school_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("schools")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
