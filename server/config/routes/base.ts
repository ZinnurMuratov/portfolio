import { Router } from 'express';

import { RenderApplication } from './../../controllers';

const BASE_ROUTER = Router();

BASE_ROUTER.get('/', RenderApplication);

export default BASE_ROUTER;
