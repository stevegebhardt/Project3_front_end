import { useState } from "react";
import Add from "./add";

const Menu = (props) => {
  const [showAdd, setShowAdd] = useState(false);

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <>
      <div>
        <ul>
          {showAdd ? null : <li onClick={toggleShowAdd}>Add a Restaurant</li>}
        </ul>
        {showAdd ? (
          <>
            <Add handleCreate={props.handleCreate} />
            <button onClick={toggleShowAdd}>Cancel</button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
