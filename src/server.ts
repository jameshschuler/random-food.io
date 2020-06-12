import { Application } from "https://deno.land/x/oak/mod.ts";
import notFound from './handlers/notFound.ts';
import errorMiddleware from './middlewares/error.ts';
import loggerMiddleware from './middlewares/logger.ts';
import timingMiddleware from './middlewares/timing.ts';
import router from './routes/routes.ts';

const port = 5000;
const host = '';

const app = new Application();
// Logging
app.use( loggerMiddleware );

// Timing
app.use( timingMiddleware );

// Errors
app.use( errorMiddleware );
app.use( router.routes() );
app.use( router.allowedMethods() );
app.use( notFound );

console.log( `Server running on http://localhost:${port}/v1/api` );

await app.listen( { port } );
