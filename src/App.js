import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./components/edit";
import Add from "./components/add"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [restaurants, setRestaruants] = useState([]);

  const getRestaurants = () => {
    axios.get("http://localhost:3000/restaurants").then((response) => {
      setRestaruants(response.data);
    });
  };

  const handleCreate = (data) =>{
    axios.post("http://localhost:3000/restaurants", data).then((response) =>{
      console.log(response)
      let newRestaurant = [...restaurants, response.data];
      setRestaruants(newRestaurant)
      console.log(newRestaurant)
    })
  }

  const handleEdit = (data) => {
    axios
      .put("http://localhost:3000/restaurants/" + data.id, data)
      .then((response) => {
        console.log(response);
        let newRestaurants = restaurants.map((restaurant) => {
          return restaurant._id !== data._id ? restaurant : data;
        });
        setRestaruants(newRestaurants);
      });
  };

  const handleDelete = (deletedRestaurant) => {
    axios
      .delete("http://localhost:3000/restaurants/" + deletedRestaurant._id)
      .then((response) => {
        let newRestaurants = restaurants.filter((restaurant) => {
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
        <Add handleCreate={handleCreate} />
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
