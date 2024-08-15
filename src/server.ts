import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const PORT = process.env.NODE_DOCKER_PORT ?? 3000;
const DB_USER = process.env.DB_USER ?? null;
const DB_PASSWORD = process.env.DB_PASSWORD ?? null;
const DB_NAME = process.env.DB_NAME ?? null;
const DB_PORT = process.env.DB_PORT ?? null;

const app = express();
app.use(express.json());

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@mongodb:${DB_PORT}/`;

(async () => {
  if (!PORT || !DB_USER || !DB_PASSWORD || !DB_NAME || !DB_PORT) {
    throw new Error("Missing env");
  }

  const client = await MongoClient.connect(url);

  const collection = await client.db(DB_NAME).createCollection("vehicles");

  app.get("/api/v1/vehicles", async (req, res) => {
    const vehicles = await collection.find({}).toArray();
    res.json({ data: vehicles });
  });

  app.get("/api/v1/vehicles/:id", async (req, res) => {
    const { id } = req.params;

    const _id = new ObjectId(id);

    const vehicles = await collection.findOne({ _id });
    res.json({ data: vehicles });
  });

  app.post("/api/v1/vehicles", async (req, res) => {
    const { name } = req.body;
    const inserted = await collection.insertOne({
      name,
    });

    const data = await collection.findOne({ _id: inserted.insertedId });

    res.status(201).json({ data });
  });

  app.put("/api/v1/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const _id = new ObjectId(id);

    await collection.updateOne(
      { _id },
      {
        $set: {
          name,
        },
      },
    );

    const data = await collection.findOne({ _id });

    res.json({ data });
  });

  app.delete("/api/v1/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    const _id = new ObjectId(id);

    await collection.deleteOne({ _id });

    res.status(204).send();
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
