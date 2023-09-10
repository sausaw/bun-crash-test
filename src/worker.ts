import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });
self.onmessage = (event: MessageEvent) => {
  postMessage(nunjucks.renderString('Hello {{ username }}', { username: 'James' }));
};
