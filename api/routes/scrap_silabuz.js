import { Router } from "express";

import getDataScrapSilabuz from '../controllers/scrapSilabuzController.js';

export const router = Router();

router.get('/', getDataScrapSilabuz);

