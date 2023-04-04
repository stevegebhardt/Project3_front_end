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
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="restName">Restaurant Name:</label>
                  <input className="form-control"
                    type="text"
                    name="restName"
                    onChange={handleChange}
                    value={restaurant.restName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input className="form-control"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={restaurant.address}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <input className="form-control"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={restaurant.city}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State:</label>
                  <input className="form-control"
                    type="text"
                    name="state"
                    onChange={handleChange}
                    value={restaurant.state}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip Code:</label>
                  <input className="form-control"
                    type="number"
                    name="zip"
                    onChange={handleChange}
                    value={restaurant.zip}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="restImg">Restaurant Photo:</label>
                  <input className="form-control"
                    type="text"
                    name="restImg"
                    onChange={handleChange}
                    value={restaurant.restImg}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ranking">Ranking:</label>
                  <input className="form-control"
                    type="text"
                    name="ranking"
                    onChange={handleChange}
                    value={restaurant.ranking}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input className="form-control"
                    type="text"
                    name="price"
                    onChange={handleChange}
                    value={restaurant.price}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cuisine">Cuisine:</label>
                  <input className="form-control"
                    type="text"
                    name="cuisine"
                    onChange={handleChange}
                    value={restaurant.cuisine}
                  />
                </div>
                <input className="btn btn-outline-dark" type="submit" />
                <button className="btn btn-outline-dark"
                  onClick={() => {
                    props.handleDelete(restaurant);
                  }}
                >
                  Delete
                </button>
                <button className="btn btn-outline-dark" onClick={toggleEdit}>Cancel</button>
              </form>

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
