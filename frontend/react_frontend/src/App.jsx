import { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const [requestData, setRequestData] = useState("");
  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/my_endpoint/?id=${requestData}`)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.message);
      });
  };

  const handleButtonClick = () => {
    fetchData();
  };
  const handleChange = () => {
    setRequestData(event?.target.value);
  };
  return (
    <>
      <h1>REACT & DJANGO CONNECTION SETUP</h1>
      <input type="number" onChange={handleChange} />
      <br />

      <br />
      <button type="button" onClick={handleButtonClick}>
        Submit
      </button>
      {response && (
        <>
          <h2>Response:</h2>
          {response}
        </>
      )}
    </>
  );
}

export default App;
