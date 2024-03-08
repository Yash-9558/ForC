import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Yash Gohel</h1>
      <p>JOKES : {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h4>{joke.joke}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
