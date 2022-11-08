require("dotenv").config({ path: "./.env" });
const { Op } = require("sequelize");

const db = require("../Model");
const Car = db.cars;

const cars = async (req, res) => {
  try {
    const user = await Car.findAll();
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

const filter = async (req, res) => {
  try {
    const filteredUsers = await Car.findAll({
      where: {
        [Op.and]: Object.entries(req.query).map(([fieldName, values]) => [
          {
            [Op.or]: values.map((value) => [
              {
                [fieldName]: value,
              },
            ]),
          },
        ]),
      },
    });
    return res.status(201).send(filteredUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  filter,
  cars,
};
