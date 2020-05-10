
exports.up = function(knex) {
    return knex.schema
    .createTable("users", table => {
        table.increments("id");
        table.string("username").unique().notNullable();
        table.string("password").notNullable();
        table.dateTime("updated_at").defaultTo(knex.raw("NULL ON UPDATE CURRENT_TIMESTAMP"));
        table.dateTime("created_at").defaultTo(knex.fn.now());
   })
   .createTable("expenses", table => {
       table.increments("id");
       table.string("name").notNullable();
       table.float("amount").notNullable();
       table.integer("time_between").notNullable();
       table.integer("next_payment").notNullable();
       table.dateTime("updated_at").defaultTo(knex.raw("NULL ON UPDATE CURRENT_TIMESTAMP"));
       table.dateTime("created_at").defaultTo(knex.fn.now());

       table.integer("user_id").unsigned().notNullable();
       // mapping the foreign key from the other table
       table.foreign("user_id").references("users.id");
   })
   .createTable("summaries", table => {
        table.increments("id");
        table.dateTime("payment_date").notNullable();
        table.float("total").notNullable();
        table.dateTime("updated_at").defaultTo(knex.raw("NULL ON UPDATE CURRENT_TIMESTAMP"));
        table.dateTime("created_at").defaultTo(knex.fn.now());
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("users.id");
   })
   .createTable("summaries_expenses", table => {
       // a many to many mapping table
       table.integer("summary_id").unsigned().notNullable();
       table.foreign("summary_id").references("summaries.id");
       table.integer("expense_id").unsigned().notNullable();
       table.foreign("expense_id").references("expenses.id");
   });
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("summaries_expenses")
    .dropTableIfExists("summaries")
    .dropTableIfExists("expenses")
    .dropTableIfExists("users");
};