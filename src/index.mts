import express from 'express';
import * as routers from './routers/index.mjs';

const app = express();
const port = 3000;

app.use(routers.healthcheck).use(routers.user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
