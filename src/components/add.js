import {useState} from 'react'

const Add = (props) => {
  const [restaurant, setRestaurant] = useState({
    restName: "",
    address: "",
    city: "",
    state: "",
    zip: Number,
    restImg: "",
    foodImg: [""],
    ranking: "",
    price: "",
    cuisine: "",
  });

    const handleChange = (event) => {
        setRestaurant({ ...restaurant, [event.target.name]: event.target.value });
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(restaurant);
    props.toggleShowAdd();
    props.toggleMenu();
  };


  return (
    <>
      <>
        <div className="pop-up">
          <div className="pop-upcontent">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="restName"
                  onChange={handleChange}
                  value={restaurant.name}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={restaurant.address}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={restaurant.city}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  onChange={handleChange}
                  value={restaurant.state}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="zip">Zip Code:</label>
                <input
                  className="form-control"
                  type="number"
                  name="zip"
                  onChange={handleChange}
                  value={restaurant.zip}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="restImg">Restaurant Image:</label>
                <input
                  className="form-control"
                  type="text"
                  name="restImg"
                  onChange={handleChange}
                  value={restaurant.restImg}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="foodImg">Food Image:</label>
                <input
                  className="form-control"
                  type="text"
                  name="foodImg"
                  onChange={handleChange}
                  value={restaurant.foodImg}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="ranking">Ranking:</label>
                <input
                  className="form-control"
                  type="text"
                  name="ranking"
                  onChange={handleChange}
                  value={restaurant.ranking}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  onChange={handleChange}
                  value={restaurant.price}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="cuisine">Cuisine:</label>
                <input
                  className="form-control"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={restaurant.cuisine}
                />
              </div>
              <br />
              <input className="btn btn-outline-dark" type="submit" />
              <button
                className="btn btn-outline-dark"
                onClick={props.toggleShowAdd}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Add;