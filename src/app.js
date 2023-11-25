const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");


require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/authentication');
applyMiddleware(app);

app.use(authRoutes);
app.get("/health", (req, res) => {
  res.send("SurveyOcean is running....");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`SurveyOcean Server is running on port ${port}`);
  });
};

main();
