
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('electives').del()
    .then(function () {
      return knex("users").del();
    });
};
