import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./components/edit";
import Restaurant from "./components/restaurant";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/search";
import Menu from "./components/hambuger-menu";

function App() {
  const [restaurants, setRestaruants] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const getRestaurants = () => {
    axios.get("http://localhost:3000/restaurants").then((response) => {
      setRestaruants(response.data);
    });
  };

  const handleCreate = (data) => {
    axios.post("http://localhost:3000/restaurants", data).then((response) => {
      console.log(response);
      let newRestaurants = [...restaurants, response.data];
      setRestaruants(newRestaurants);
      console.log(newRestaurants);
    });
  };

  const handleEdit = (data) => {
    axios
      .put("http://localhost:3000/restaurants/" + data._id, data)
      .then((response) => {
        console.log(response);
        let newRestaurants = restaurants.map((restaurant) => {
          return restaurant._id !== data._id ? restaurant : data;
        });
        setRestaruants(newRestaurants);
      });
  };

  const handleDelete = (deletedRestaurant) => {
    console.log(deletedRestaurant._id);
    axios
      .delete("http://localhost:3000/restaurants/" + deletedRestaurant._id)
      .then((response) => {
        let newRestaurants = restaurants.filter((restaurant) => {
          return restaurant._id !== deletedRestaurant._id;
        });
        setRestaruants(newRestaurants);
      });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <div className="">
        <header className="container">
          <div>
          <div className="nav-div">
            <div className='michelin'>
              <img src="/michelin-man.jpeg"/>
            </div>
            <h1>"My"chelin Guide</h1>
            <div className='dropdown'>
             <img src="/hamburger.svg" onClick={toggleMenu}></img>
            </div>
          </div>
          
          </div>
          <Search
            placeholder="Search by City or State....."
            data={restaurants}
          />
        </header>
        <div className="jumbotron text-center">
          <h2 className="">Where would you like to go eat?</h2>
        </div>
        {showMenu ? null : <Menu handleCreate={handleCreate} />}
        <div className="container">
        <div className="row">
          {restaurants.map((restaurant) => {
            return (
              <>
                <div className="col-md-4">
                  <Restaurant restaurant={restaurant} />
                  <div className="card-body"></div>
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
    </>
  );
}

export default App;
