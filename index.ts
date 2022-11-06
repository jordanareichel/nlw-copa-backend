import Fastify from "fastify";
import cors from '@fastify/cors';
import { poolRoute } from "./src/routes/pool";
import { userRoute } from "./src/routes/user";
import { guessRoute } from "./src/routes/guess";
import { authRoute } from "./src/routes/auth";
import { gameRoute } from "./src/routes/game";
import jwt from "@fastify/jwt";


async function start(){
  const fastify = Fastify({
    logger: true,

  });

  await fastify.register(cors, {
    origin: true,
  });
  
  await fastify.register(jwt, {
    secret: 'nlwcopa',
  });

  await fastify.register(authRoute);
  await fastify.register(poolRoute);
  await fastify.register(userRoute);
  await fastify.register(guessRoute);
  await fastify.register(gameRoute);

  await fastify.listen({port: 3333, host: '0.0.0.0'});
}

start();