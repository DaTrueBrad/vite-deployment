import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [value, setValue] = useState("This Text");

  let handleClick = () => {
    axios.get('/api/hello')
    .then((res) => {
      console.log(res)
      setValue(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const handleDB = () => {
    axios.post('/api/addContent')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  useEffect(() => {
    axios.get('/api/getContent')
    .then((res) => {
      console.log('DB CONTENTS: ', res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  },[])

  return (
    <div className="App">
      <header>
        <h2>Deployment Test</h2>
      </header>
      <h1>
        <span className="colored-text">{value}</span> will change once you click
        the button...{" "}
      </h1>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleDB}>Add to DB</button>
    </div>
  );
}

export default App;
