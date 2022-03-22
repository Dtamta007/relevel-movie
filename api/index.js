require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// sample for express server
app.use("/", (req, res, next) => {
  res.status(200).json({ success: true, data: "Start Here" });
});

const PORT = process.env.PORT || 8080; // port at which server listening


app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);

// fetch routes
let userRouter = require('./src/routes/users');
let authRouter = require('./src/routes/auth');
let movieRouter = require('./src/routes/movies');

//define root routes.
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/movie', movieRouter);