import { Router } from 'express';

import { HandleDeploy, VerifyGithub } from './../../controllers';

const SCRIPTS_ROUTER = Router();

SCRIPTS_ROUTER.post('/deploy.php', VerifyGithub, HandleDeploy);

export default SCRIPTS_ROUTER;
