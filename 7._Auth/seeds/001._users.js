
exports.seed = function(knex) {
       // Inserts seed entries
      return knex('users').insert([
        {username: "admin", password: "secret"},
        {username: "seconduser", password: "dobblesecret"},
      ]);   
};
