import { useState } from "react";

const Practice = () => {
  const [result, setResult] = useState("");

  return <div>
    <input type="text" onChange={setResult}/>

    <p>{result}</p>
  </div>;
};

export default Practice;
