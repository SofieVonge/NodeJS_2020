const { Model } = require("objection");
const User = require("./User.js");

class Elective extends Model {
    static tableName = "electives";

    static relationMappings = {
        //the name user is a key we use in the users.js route to find the relation, it's the name of the relation
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: "electives.userId",
                to: "users.id"
            }
        }
    };
}

module.exports = Elective;