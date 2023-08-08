import { useState } from "react";

const Practice = () => {
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setResult(e.target.value);
  };
  
  return (
    <div>
      <input type="text" onChange={handleInputChange} />

      {result}
    </div>
  );
};

export default Practice;
