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

  return (
    <>
      {showEdit ? (
        <>
          <div className="pop-up">
            <div className="pop-upcontent">
            <form onSubmit={handleSubmit}>
              <label htmlFor="restName">Restaurant Name:</label>
              <input
                type="text"
                name="restName"
                onChange={handleChange}
                value={restaurant.restName}
              />

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={restaurant.address}
              />

              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={restaurant.city}
              />

              <label htmlFor="state">State:</label>
              <input
                type="text"
                name="state"
                onChange={handleChange}
                value={restaurant.state}
              />

              <label htmlFor="zip">Zip Code:</label>
              <input
                type="number"
                name="zip"
                onChange={handleChange}
                value={restaurant.zip}
              />

              <label htmlFor="restImg">Restaurant Photo:</label>
              <input
                type="text"
                name="restImg"
                onChange={handleChange}
                value={restaurant.restImg}
              />

              <label htmlFor="ranking">Ranking:</label>
              <input
                type="text"
                name="ranking"
                onChange={handleChange}
                value={restaurant.ranking}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                value={restaurant.price}
              />

              <label htmlFor="cuisine">Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={restaurant.cuisine}
              />

              <input type="submit" />
            </form>
            <button
              onClick={() => {
                props.handleDelete(restaurant);
              }}
            >
              Delete this Record
            </button>
            <button onClick={toggleEdit}>Cancel</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <button className="btn btn-outline-dark" onClick={toggleEdit}>Edit</button>
        </>
      )}
    </>
  );
};
export default Edit;
