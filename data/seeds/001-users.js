
const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "Seema1",
      password: bcrypt.hashSync("random", 14),
      email: "seema@gmail.com",
      location: "Nebraska, NE"
    },
    {
      username: "Fatima1",
      password: bcrypt.hashSync("random", 14),
      email: "fatima@gmail.com",
      location: "Nebraska, NE"
    },
    {
      username: "Asima1",
      password: bcrypt.hashSync("random", 14),
      email: "asima@gmail.com",
      location: "Nebraska, NE"
    },
    {
      username: "Chris1",
      password: bcrypt.hashSync("random", 14),
      email: "chris@gmail.com",
      location: "Nebraska, NE"
    },
    {
      username: "Meena1",
      password: bcrypt.hashSync("random", 14),
      email: "meena@gmail.com",
      location: "Nebraska, NE"
    }
  ]);
};