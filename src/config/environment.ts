const NODE_ENV = process.env.NODE_ENV;

const DOCKER_PORT = process.env.NODE_DOCKER_PORT ?? null;
const HOST_PORT = process.env.NODE_LOCAL_PORT ?? null;

const DB_USER = process.env.DB_USER ?? null;
const DB_PASSWORD = process.env.DB_PASSWORD ?? null;
const DB_NAME = process.env.DB_NAME ?? null;
const DB_PORT = process.env.DB_PORT ?? null;
const DB_HOST = process.env.DB_HOST ?? null;

const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;

if (
  NODE_ENV !== "test" &&
  (!DOCKER_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME || !DB_PORT || !DB_HOST)
) {
  throw new Error("Missing env");
}

export default {
  NODE_ENV,
  DOCKER_PORT,
  HOST_PORT,
  DB_URL,
  DB_NAME,
};
