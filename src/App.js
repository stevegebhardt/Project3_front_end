import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./components/edit";
import Add from "./components/add"
import Restaurant from "./components/restaurant"
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/search"

function App() {
  const [restaurants, setRestaruants] = useState([]);
  const [add, setAdd] = useState(false)

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

  const addRestaurant = () =>{
    setAdd(!add)
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="container">
      <div>
        <header className="container d-flex justify-content-between">
          <h1 >Mychelin Guide</h1>
          <Search placeholder="Search by City or State....." data={restaurants}/>
        </header>
      <button class="btn btn-primary" onClick={addRestaurant}>Add Restaurant</button>
      {add ? <Add handleCreate={handleCreate} />: null}
          <div className="row">
        {restaurants.map((restaurant) => {
          return (
            <>
            
            <div className="col-md-4">
            <Restaurant restaurant={restaurant} />
            <Edit
              restaurant={restaurant}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            </div>
           
            </>
          );
        })}
        </div>
      </div>
      
      </div>
  );
}

export default App;
