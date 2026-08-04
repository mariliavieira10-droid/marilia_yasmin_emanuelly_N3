import express from "express";

import {
    listarFuncionarios,
    cadastrarFuncionario
} from "../controllers/funcionariosController.js";

const router = express.Router();

router.get("/", listarFuncionarios);

router.post("/", cadastrarFuncionario);

export default router;