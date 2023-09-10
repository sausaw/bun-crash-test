import { Elysia } from "elysia";
// import nunjucks from "nunjucks";
const workerURL = new URL("worker", import.meta.url).href;
const worker = new Worker(workerURL);


// nunjucks.configure({ autoescape: true });
const app = new Elysia().get("/", async () => {
  // return nunjucks.renderString('Hello {{ username }}', { username: 'James' });
  worker.postMessage("hello");
  return await new Promise((resolve, reject) => {
    worker.onmessage = event => {
      console.log(event.data);
      resolve(event.data)
    };
  })
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
