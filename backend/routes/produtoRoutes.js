import express from "express";

import {
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto,
    atualizarProduto,
    removerProduto,
    buscarPorNome,
    buscarPorCategoria,
    buscarPorTag
} from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", listarProdutos);
router.get("/busca", buscarPorNome);
router.get("/categoria/:id", buscarPorCategoria);
router.get("/tag/:tag", buscarPorTag);
router.get("/:id", buscarProdutoPorId);

router.post("/", cadastrarProduto);

router.put("/:id", atualizarProduto);

router.delete("/:id", removerProduto);

export default router;