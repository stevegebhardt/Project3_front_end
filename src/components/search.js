import { useState } from "react";
import "./searchbar.css";

const Search = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="form-outline">
        <label></label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResults">
          {filteredData.map((value, key) => {
            return (
              <p
                className="dataItem"
                onClick={() => {
                  axios
                    .get("http://localhost:3000/restaurants/" + value._id)
                    .then((response) => {
                      let newRestaurant = props.restaurants.map(
                        (restaurant) => {
                          return restaurant._id == value._id
                            ? restaurant
                            : value;
                        }
                      );
                      props.setRestaruants(newRestaurant);
                    });
                }}
              >
                {value.restName}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
