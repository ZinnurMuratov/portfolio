import { Router } from 'express';

import * as baseController from './../../controllers/base';

const BASE_ROUTER = Router();

BASE_ROUTER.get('/', baseController.RenderApplication);

export default BASE_ROUTER;