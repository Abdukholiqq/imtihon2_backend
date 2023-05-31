import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import PORT from "./config.js";
import swaggerRouter from "./swagger.js";

import postRouter from "./router/post.router.js";
import filterRouter from "./router/filter.router.js";

const app = express();

import accessLogStream from "./config.js";
import errorHandler from "./middlewares/errorHandler.js";
app.use(fileUpload());
app.use(express.json());
app.use(
  morgan("combined", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
    stream: accessLogStream,
  })
);
app.use(errorHandler);
app.use(postRouter);
app.use(filterRouter);
app.use(swaggerRouter);

app.listen(5000, () => console.log(`server running ${PORT}`));
