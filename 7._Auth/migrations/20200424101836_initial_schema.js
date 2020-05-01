
exports.up = function(knex) {
    //create a table with columns
    return knex.schema
           .createTable("users", table => {
                table.increments("id");
                table.string("username").unique().notNullable();
                table.string("password").notNullable();
                table.dateTime("updated_at").defaultTo(knex.raw("NULL ON UPDATE CURRENT_TIMESTAMP")); //in raw we can define sql
                table.dateTime("created_at").defaultTo(knex.fn.now()); //set default to current time
           })
           .createTable("electives", table => {
            table.increments("id");
            table.string("course_name").notNullable();
            
            //setting the foreign key
            table.integer("user_id").unsigned().notNullable();
                        //the keyname in this table //the keyname from the other table
            table.foreign("user_id").references("users.id");

            table.dateTime("updated_at").defaultTo(knex.raw("NULL ON UPDATE CURRENT_TIMESTAMP"));
            table.dateTime("created_at").defaultTo(knex.fn.now());
           });
};



exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists("electives")
        .dropTableIfExists("users");
};
