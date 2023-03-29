import { useState } from "react";

const Add = (props) => {
  const [restaurant, setRestaurant] = useState({
    restName: "",
    address: "",
    city: "",
    state: "",
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
  };

  return (
    <>
      <>
        <div className="container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="name">Name:</label>
                </div>
                <input
                  type="text"
                  name="restName"
                  onChange={handleChange}
                  value={restaurant.name}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="address">Address:</label>
                </div>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={restaurant.address}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="city">City:</label>
                </div>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={restaurant.city}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="state">State:</label>
                </div>
                <input
                  type="text"
                  name="state"
                  onChange={handleChange}
                  value={restaurant.state}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="restImg">Restaurant Image:</label>
                </div>
                <input
                  type="text"
                  name="restImg"
                  onChange={handleChange}
                  value={restaurant.restImg}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="foodImg">Food Image:</label>
                </div>
                <input
                  type="text"
                  name="foodImg"
                  onChange={handleChange}
                  value={restaurant.foodImg}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="ranking">Ranking:</label>
                </div>
                <input
                  type="text"
                  name="ranking"
                  onChange={handleChange}
                  value={restaurant.ranking}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="price">Price:</label>
                </div>
                <input
                  type="text"
                  name="price"
                  onChange={handleChange}
                  value={restaurant.price}
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="cuisine">Cuisine:</label>
                </div>
                <input
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={restaurant.cuisine}
                />
              </div>
              <br />
              <input type="submit" />
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Add;
