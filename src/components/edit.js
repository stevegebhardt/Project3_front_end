import { useState } from "react";

const Edit = (props) => {
  const [restaurant, setRestaurant] = useState({ ...props.restaurant });
  const [showEdit, setShowEdit] = useState(false);

  const handleChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(restaurant);
    setShowEdit(!showEdit);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  // const EditForm = () => {
    return (
      <>
        <div className="col-3">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="restName">Restaurant Name:</label>
              <input type="text" name="restName" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input type="text" name="address" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input type="text" name="city" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <input type="text" name="state" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="restImg">Restaurant Photo:</label>
              <input type="text" name="restImg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="ranking">Ranking:</label>
              <input type="text" name="ranking" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input type="text" name="price" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="cuisine">Cuisine:</label>
              <input type="text" name="cuisine" onChange={handleChange} />
            </div>
            <input type="submit" />
          </form>
          <button
            onClick={() => {
              props.handleDelete(restaurant);
            }}
          >
            Delete this Record
          </button>
          <button onClick={toggleEdit}>Hide</button>
        </div>
      </>
    );
  // };

  // return (
  //   <>
  //     <div>
  //       {showEdit ? (
  //         <EditForm />
  //       ) : (
  //         <>
  //           <div>
  //             <button onClick={toggleEdit}>Edit this Record</button>
  //           </div>
  //         </>
  //       )}
  //     </div>
  //   </>
  // );
};

export default Edit;
