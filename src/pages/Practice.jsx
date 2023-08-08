import { useState } from "react";

const Practice = () => {
  const [result, setResult] = useState("");

  return (
    <div>
      <input type="text" onChange={setResult} />

      {result}
    </div>
  );
};

export default Practice;
