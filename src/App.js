import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./components/edit";

function App() {
  const [restaurants, setRestaruants] = useState([]);

  const getRestaurants = () => {
    axios
      .get("https://sparklyunicornmagicapp.herokuapp.com/restaurants")
      .then((response) => {
        setRestaruants(response.data);
      });
  };

  const handleEdit = (data) => {
    axios
      .put(
        "https://sparklyunicornmagicapp.herokuapp.com/restaurants/" + data.id,
        data
      )
      .then((response) => {
        console.log(response);
        let newRestaurants = restaurants.map((restaurant) => {
          return Record._id !== data._id ? restaurant : data;
        });
        setRestaruants(newRestaurants);
      });
  };

  const handleDelete = (data) => {
    axios
      .delete(
        "https://sparklyunicornmagicapp.herokuapp.com/restaurants/" +
          deletedRestaurant._id
      )
      .then((response) => {
        let newRestaurants = restaurants.filter((restaurants) => {
          return restaurant._id !== deletedRestaurant._id;
        });
        setRestaruants(newRestaurants);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <div>
        <header>
          <h1>Mychelin Guide</h1>
        </header>
        {restaurants.map((restaurant) => {
          return (
            <Edit
              restaurant={restaurant}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
