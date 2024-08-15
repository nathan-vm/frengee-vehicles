import express from "express";
import "express-async-errors";
import cors from "cors";
import routes from "./infra/routes";
import environment from "../config/environment";
import limiter from "./infra/middleware/rateLimiter";
import { errors } from "celebrate";
import errorHandler from "./infra/middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

app.use(routes);

app.use(errors());

app.use(errorHandler);

app.listen(environment.PORT, () => {
  console.log(
    `🚀 Server started on: http://localhost:${environment.EXTERNAL_PORT}`,
  );
});
