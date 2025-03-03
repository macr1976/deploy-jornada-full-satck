// API Application Programming Interface
// Tipos de requisição para servidores: POST, GET, PUT, DELETE. é o CRUD no html
import express from "express"; // incluir no package.jason 'type: "module",' para não dar erro
import cors from "cors"; // midleware que permite que a porta X acesse dados da Y, no caso, porta 5173 acesse dados da 3001
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001; // não ha uma regra para a porta a ser usada, teste e veja se esta em uso, se usada modifique o numero - node ./api/server.js

app.use(cors());

//no Browser, google chrome etc, digite localhost:3001, onde 3001 é a porta q vc escolher para ele monitorar para ver o resultado
app.get("/api/", (request, response) => {
  response.send("Olá Mundo");
});

app.get("/api/artist", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`servidor esta escutando a porta ${PORT}`);
});
