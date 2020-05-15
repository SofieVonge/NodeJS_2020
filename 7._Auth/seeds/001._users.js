
exports.seed = function(knex) {
       // Inserts seed entries
      return knex('users').insert([ //password for "password"
        {username: "admin", password: "$2b$12$igZ5/EFg/yauV8epSD5f5.YAMPT.uPup5R.prM2E3z75KuFyo.kaW"},
        {username: "seconduser", password: "$2b$12$9rO.PG0U1wtWGKzHwAvcWO364svqKRKBdbqtFHtDZA1oFTpce.eNi"},
      ]);   
};
