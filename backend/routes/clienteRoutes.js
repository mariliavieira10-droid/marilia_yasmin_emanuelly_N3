import express from "express";

import {
    listarClientes,
    buscarCliente,
    cadastrarCliente,
    atualizarCliente,
    removerCliente
} from "../controllers/clientesController.js";

const router = express.Router();

router.get("/", listarClientes);
router.get("/:id", buscarCliente);

router.post("/", cadastrarCliente);

router.put("/:id", atualizarCliente);

router.delete("/:id", removerCliente);

export default router;