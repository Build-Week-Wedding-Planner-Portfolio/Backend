
const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { 
      id:1,
      username: "Seema2",
      password: bcrypt.hashSync("random", 14),
      email: "seema@gmail.com",
      location: "Nebraska, NE"
    },
    { id:2,
      username: "Fatima2",
      password: bcrypt.hashSync("random", 14),
      email: "fatima@gmail.com",
      location: "Nebraska, NE"
    },
    { id:3,
      username: "Asima2",
      password: bcrypt.hashSync("random", 14),
      email: "asima@gmail.com",
      location: "Nebraska, NE"
    },
    { id:4,
      username: "Chris2",
      password: bcrypt.hashSync("random", 14),
      email: "chris@gmail.com",
      location: "Nebraska, NE"
    },
    { id:5,
      username: "Meena2",
      password: bcrypt.hashSync("random", 14),
      email: "meena@gmail.com",
      location: "Nebraska, NE"
    }
  ]);
};