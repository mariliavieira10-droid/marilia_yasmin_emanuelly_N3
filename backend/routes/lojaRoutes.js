import express from "express";

import {
    listarLojas,
    cadastrarLoja
} from "../controllers/lojaController.js";

const router = express.Router();

router.get("/", listarLojas);

router.post("/", cadastrarLoja);

export default router;