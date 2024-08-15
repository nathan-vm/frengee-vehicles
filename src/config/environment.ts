const PORT = process.env.NODE_DOCKER_PORT ?? 3000;
const DB_USER = process.env.DB_USER ?? null;
const DB_PASSWORD = process.env.DB_PASSWORD ?? null;
const DB_NAME = process.env.DB_NAME ?? null;
const DB_PORT = process.env.DB_PORT ?? null;
const NODE_LOCAL_PORT = process.env.NODE_LOCAL_PORT ?? null;

if (!PORT || !DB_USER || !DB_PASSWORD || !DB_NAME || !DB_PORT) {
  throw new Error("Missing env");
}

export default {
  PORT,
  EXTERNAL_PORT: NODE_LOCAL_PORT,
  DB_URL: `mongodb://${DB_USER}:${DB_PASSWORD}@mongodb:${DB_PORT}/`,
  DB_NAME,
};
