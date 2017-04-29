import * as express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.json({ success: true });
})

app.listen(3000, () => {
  console.log('looking for revenge');
});