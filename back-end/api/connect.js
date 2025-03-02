// java script Assincrono
// await asnc
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://macramalho:Doom22!3md@cluster0.t3zu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("spotifyAula");

// para testar
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection); //exibe apenas a collection em forma de array

//daqui pra baixo é tudo teste
//console.log(db); //exibe tudo no banco de dados

// //isso é so para teste. deve ser realizado no servidor dentro dos GETs buscando o que precisa
// sem o awaits ele retorna apenas uma promessa q vai entregar o dado

// use node ./api/connect.js para rodar o teste do console.log
