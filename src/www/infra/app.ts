import express from "express";
import "express-async-errors";
import cors from "cors";
import routes from "./routes";
import limiter from "./middleware/rateLimiter";
import { errors } from "celebrate";
import errorHandler from "./middleware/errorHandler";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../docs/swagger.json";

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

app.use("/api/v1", routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errors());

app.use(errorHandler);

export default app;
