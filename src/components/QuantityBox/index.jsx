import { Button } from "@mui/material";
import { FaMinus, FaPlus } from "../../assets/icons";
import { useState } from "react";

const QuantityBox = () => {
  const [inputVal, setInputVal] = useState(1);

  const minus = () => {
    if (inputVal !== 1 && inputVal > 0) {
      setInputVal(inputVal - 1);
    }
  };

  const plus = () => {
    setInputVal(inputVal + 1);
  };

  return (
    <>
      <div className="quantityDrop d-flex align-items-center">
        <Button onClick={minus}>
          <FaMinus />
        </Button>
        <input type="text" value={inputVal} />
        <Button onClick={plus}>
          <FaPlus />
        </Button>
      </div>
    </>
  );
};

export default QuantityBox;
