import environment from "../config/environment";
import app from "./infra/app";

app.listen(environment.DOCKER_PORT, () => {
  console.log(
    `🚀 Server started on: http://localhost:${environment.HOST_PORT}`,
  );
});
