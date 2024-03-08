import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    { id: 2, joke: "What do you call fake spaghetti? An impasta!" },
    {
      id: 3,
      joke: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    },
    {
      id: 4,
      joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 5,
      joke: "Why don't skeletons fight each other? They don't have the guts.",
    },
    {
      id: 6,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 7,
      joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
    },
    {
      id: 8,
      joke: "Why don't oysters donate to charity? Because they are shellfish!",
    },
    {
      id: 9,
      joke: "I used to play piano by ear, but now I use my hands and fingers.",
    },
    {
      id: 10,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
  ];
  return res.status(200).json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Your Server is running ${port}`);
});
