const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./Model");
const userRoutes = require("./Routes/userRoutes");
const carRoutes = require("./Routes/carRoutes");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

db.sequelize.sync().then(() => {
  console.log("db has been re sync");
});

app.use("/api/users", userRoutes);

app.use("/api/cars", carRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
