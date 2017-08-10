import { Router } from 'express';

import * as baseController from './../../controllers/base';

const BASE_ROUTER = Router();

BASE_ROUTER.get('/', baseController.RenderApplication);
BASE_ROUTER.get('*', baseController.CatchAll);

export default BASE_ROUTER;
