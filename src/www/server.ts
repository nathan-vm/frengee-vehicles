import express from "express";
import "express-async-errors";
import cors from "cors";
import routes from "./infra/routes";
import environment from "../config/environment";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(environment.PORT, () => {
  console.log(
    `🚀 Server started on: http://localhost:${environment.EXTERNAL_PORT}`,
  );
});
