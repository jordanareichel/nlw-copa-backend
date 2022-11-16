// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
  logger: false,
});

// Register your application as a normal plugin.
app.register(import("./functions/server"), {
    prefix: '/'
});

export default async (req: any, res: any) => {
    await app.ready();
    app.server.emit('request', req, res);
}