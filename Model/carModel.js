module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "car",
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fuel_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aspiration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      num_of_doors: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body_style: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drive_wheels: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      engine_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      wheel_base: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW"),
      },
    },
    { timestamps: false }
  );
  return Car;
};
