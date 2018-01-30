import { Router } from 'express';

import {
  HandleDeploy,
  RecordEvent,
  VerifyGithub,
} from './../../controllers';

const SCRIPTS_ROUTER = Router();

SCRIPTS_ROUTER.post('/launch', VerifyGithub, RecordEvent, HandleDeploy);

export default SCRIPTS_ROUTER;
