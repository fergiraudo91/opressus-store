import { Button } from "@material-ui/core";
import React, { useState } from "react";
import './Home.css';

export const Home = () => {
    const [count, setCount] = useState(0);
  return (
    <>
        <div className="btn-container">
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={() => count > 0 && setCount(count - 1)}>
        -
      </Button>
      </div>
      <h1 className="result">{count}</h1>
      
    </>
  );
};
