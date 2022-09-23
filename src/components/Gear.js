import Update from "./Update";
import { useState } from "react";

const Gear = () => {
  const [updateVisible, setUpdateVisible] = useState(false);

  const mostrarUpdate = () => {
    setUpdateVisible(!updateVisible);
  };
  return (
    <div className="engranaje-container">
    {updateVisible ? <Update /> : null}
      <button className="button-gear" onClick={mostrarUpdate}>
        <img
          src="engranaje.svg"
          alt="engranaje de actualizaciones"
          className="gear"
        />
      </button>
    </div>
  );
};

export default Gear;
