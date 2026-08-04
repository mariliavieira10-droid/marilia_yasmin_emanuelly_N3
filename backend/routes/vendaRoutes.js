import express from "express";

import {
    listarVendas,
    criarVenda
} from "../controllers/vendaController.js";

const router = express.Router();

router.get("/", listarVendas);

router.post("/", criarVenda);

export default router;