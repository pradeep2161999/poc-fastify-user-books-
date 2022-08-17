// ESM
import * as dotenv from "dotenv";
import build from "./application";
dotenv.config({ path: `${__dirname}/../.env` });

const fastify= build()

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
