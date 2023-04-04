import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./components/restaurant"
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/hambuger-menu";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const getRestaurants = () => {
    axios.get("http://localhost:3000/restaurants").then((response) => {
      setRestaurants(response.data);
    });
  };

  const handleCreate = (data) => {
    axios.post("http://localhost:3000/restaurants", data).then((response) => {
      console.log(response);
      let newRestaurants = [...restaurants, response.data];
      setRestaurants(newRestaurants);
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
        setRestaurants(newRestaurants);
      });
  };

  const handleDelete = (deletedRestaurant) => {
    axios
      .delete("http://localhost:3000/restaurants/" + deletedRestaurant._id)
      .then((response) => {
        let newRestaurants = restaurants.filter((restaurant) => {
          return restaurant._id !== deletedRestaurant._id;
        });
        setRestaurants(newRestaurants);
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
              <div className="inside-nav">
                <div className="michelin">
                  <img src="/michelin-man.jpeg" />
                </div>
                <h1>"My"chelin Guide</h1>
              </div>

              <div className="dropdown">
                <img src="/hamburger.svg" onClick={toggleMenu}></img>
              </div>
            </div>
          </div>

          {showMenu ? null : (
            <Menu
              handleCreate={handleCreate}
              restaurants={restaurants}
              setRestaurants={setRestaurants}
              toggleMenu={toggleMenu}
            />
          )}
        </header>

        <div className="jumbotron text-center">
          <h2 className="">Where would you like to go eat?</h2>
        </div>

        <div className="container">
          <div className="search">
            <div className="form-outline">
              <label></label>
              <input
                type="search"
                className="form-control"
                placeholder="search by city..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            {restaurants
              .filter((restaurant) => {
                if (searchTerm == "") {
                  return restaurant;
                } else if (
                  restaurant.city
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return restaurant;
                }
              })
              .map((restaurant) => {
                return (
                  <>
                    <div className="col-md-4">
                      <Restaurant
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

