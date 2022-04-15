import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const dencrement = () => {
    if (num > 0) setNum(num - 1);
    else {
      alert("Zero limit reached ");
      setNum(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="centerdiv">
          <h1>{num}</h1>
          <div className="btn">

          <Tooltip title="Add">
                <Button onClick={increment} className="green"> <AddIcon />   </Button>
            </Tooltip>

            <Tooltip title="Delete">
                  <Button onClick={dencrement} className="red">    <DeleteIcon />  </Button>
            </Tooltip>
           
          </div>
        </div>
    
      </div>
    </>
  );
};

export default App;

