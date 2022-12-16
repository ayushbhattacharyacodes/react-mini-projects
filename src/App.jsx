import { useState } from "react";
import { BASE_URL } from "./constant";
import "./App.css";


function App() {
  const [word, setWord] = useState("");
  const [synonym, setSynonym] = useState([]);

  const fetchSynonym = (newWord) =>{
    fetch(`${BASE_URL}/words?rel_syn=${newWord}`)
    .then((resp) => resp.json())
    .then((resp) => setSynonym(resp));
  }

  const handleCallSynonym = (e) => {
    e.preventDefault();
    fetchSynonym(word)
  };

  const displaySynonym = (synonym) =>{
     setWord(synonym)
     fetchSynonym(synonym)
  }


  return (
    <div className="App">
      <form className="wordbox" onSubmit={handleCallSynonym}>
        <label htmlFor="word">Enter your Word</label>
        <input
          type="text"
          id="word"
          onChange={(e) => {
            e.preventDefault();
            setWord(e.target.value);
          }}
          value={word}
        />
        <button>Find</button>
      </form>
      <div className="word-list">
        <ul>
          {synonym.map((s) => (
            <li
              onClick={()=>displaySynonym(s.word)} 
              key={s.word} 
            >
              {s.word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
