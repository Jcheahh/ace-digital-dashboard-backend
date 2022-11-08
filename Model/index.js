const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://dashboard:dashboard@localhost:5432/dashboard`,
  {
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel")(sequelize, DataTypes);
db.cars = require("./carModel")(sequelize, DataTypes);

module.exports = db;
