import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let accounts = [];
let tweets = [
  {
    id: "1",
    username: "maça",
    avatar:
      "https://supremaessencias.com.br/wp-content/uploads/2021/12/macavermelha1.jpg",
    tweet: "sou apenas uma fruta perdida nesse mundão",
  },
  {
    id: "1",
    username: "banana",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",
    tweet: "disseram que eu sou bom pra engordar",
  },
  {
    id: "1",
    username: "uva",
    avatar:
      "https://supernossoio.vtexassets.com/arquivos/ids/192836/Uva-Vitoria-Sem-Semente-500g.jpg?v=637776893855500000",
    tweet: "espero que ninguém beba vinho aqui",
  },
  {
    id: "1",
    username: "laranja",
    avatar: "https://assessa.com.br/wp-content/uploads/laranja-fruta-1.jpg",
    tweet: "eu sou amargo hein, me experimenta não",
  },
  {
    id: "1",
    username: "melancia",
    avatar: "https://static.clubeextra.com.br/img/uploads/1/662/634662.jpg",
    tweet: "até tu me abrir, eu já fugi",
  },
];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    return res.status(400).send("BAD REQUEST");
  }
  accounts.push(req.body);
  console.log(accounts);
  return res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  let { username, tweet } = req.body;
  if (!username || !tweet) {
    return res.status(400).send("BAD REQUEST");
  }
  let userTweet = {
    username: username,
    tweet: tweet,
    avatar: `${accounts[0].avatar}`,
  };
  tweets.push(userTweet);
  return res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  return res.send(tweets);
});

app.listen(5000, () => {
  console.log("server na porta 5000");
});
