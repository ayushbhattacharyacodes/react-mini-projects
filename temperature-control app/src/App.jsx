import "./App.css";
import { useState } from "react";
function App() {
  const [temperature, setTemperature] = useState(0);
  const [isWarm,setIsWarm] = useState("cold")

  const decreaseTemperature = () => {
    if(temperature===0){
      return;
    }
    setTemperature((prevValue) => prevValue - 1);
    if(temperature<15){
      setIsWarm("cold")
    }
  };

  const increaseTemperature = () => {
    if(temperature===30){
      return;
    }
    setTemperature((prevValue) => prevValue + 1);
    if(temperature>=15){
      setIsWarm("warm")
    }
  };


  return (
    <div className="App">
      <div className="card">
        <div className="heading">
          <h1>Temperature Control App</h1>
        </div>
        <div className={`temperature-reading ${isWarm}`}>
          <p>{temperature}°C</p>
        </div>
        <div className="button-class">
          <button onClick={decreaseTemperature}>-</button>
          <button onClick={increaseTemperature}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
