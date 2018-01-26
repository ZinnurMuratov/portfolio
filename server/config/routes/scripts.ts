import { Router } from 'express';

import { HandleDeploy } from './../../controllers';

const SCRIPTS_ROUTER = Router();

SCRIPTS_ROUTER.post('/deploy.php', HandleDeploy);

export default SCRIPTS_ROUTER;
