import express from "express";
import cors from "cors";

import produtoRoutes from "./routes/produtoRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import funcionarioRoutes from "./routes/funcionarioRoutes.js";
import lojaRoutes from "./routes/lojaRoutes.js";
import vendaRoutes from "./routes/vendaRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/produtos", produtoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/funcionarios", funcionariosRoutes);
app.use("/lojas", lojaRoutes);
app.use("/vendas", vendaRoutes);
app.use("/login", loginRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Naturale funcionando!"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});