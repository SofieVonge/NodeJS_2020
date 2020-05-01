
exports.seed = function(knex) {
      // Inserts seed entries

      return knex("users").select().then(users => {
        if (users.length >= 2) {
          return knex('electives').insert([
          {course_name: "Nodejs", user_id: users[0].id},
          {course_name: "Android", user_id: users[0].id},
          {course_name: "Python", user_id: users[0].id},
          {course_name: "IOS", user_id: users[1].id},
          {course_name: "Nodejs", user_id: users[1].id}     
      ]); 
    }
  });
}
