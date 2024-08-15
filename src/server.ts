import express from "express";

const app = express();

const port = process.env.NODE_DOCKER_PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
