import express from "express";

import {
    listarCategorias,
    cadastrarCategoria,
    removerCategoria
} from "../controllers/categoriaController.js";

const router = express.Router();

router.get("/", listarCategorias);

router.post("/", cadastrarCategoria);

router.delete("/:id", removerCategoria);

export default router;