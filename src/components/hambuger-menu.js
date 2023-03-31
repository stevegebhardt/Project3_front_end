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
          {showAdd ? null : <div className="container" onClick={toggleShowAdd}><button type="button" className="btn btn-light">Add a Restaurant</button></div>}
        </ul>
        {showAdd ? (
          <>
            <Add handleCreate={props.handleCreate} toggleShowAdd={toggleShowAdd} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
