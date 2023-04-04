import { useState } from "react";
import Add from "./add";

const Menu = (props) => {
  const [showAdd, setShowAdd] = useState(false);

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <>
      <div className="d-flex-column align-end">
        {showAdd ? null : (
          <button className="btn btn-secondary" onClick={toggleShowAdd}>
            Add a Restaurant
          </button>
        )}

        {showAdd ? (
          <>
            <Add
              toggleShowAdd={toggleShowAdd}
              handleCreate={props.handleCreate}
              toggleMenu={props.toggleMenu}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
