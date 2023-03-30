import react, { useState } from "react";

const Restaurant = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleShow = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <>
      <div className="container">
        <div>
          <img src={props.restaurant.restImg} />
        </div>
        <h3>{props.restaurant.restName}</h3>
        <p>{props.restaurant.price}</p>
        {props.restaurant.ranking === "***" ? (
          <>
            <img src="./star.svg"></img>
            <img src="./star.svg"></img>
            <img src="./star.svg"></img>
          </>
        ) : props.restaurant.ranking === "**" ? (
          <>
            <img src="./star.svg"></img>
            <img src="./star.svg"></img>
          </>
        ) : props.restaurant.ranking === "*" ? (
          <>
            <img src="./star.svg"></img>
          </>
        ) : props.restaurant.ranking === "#" ? (
          <>
            <img src="./bib-gourmand.svg"></img>
          </>
        ) : null}
        <button type="button" onClick={toggleShow}>
          Show More Info
        </button>
        {showMoreInfo ? (
          <>
            <p>
              {props.restaurant.address}, {props.restaurant.city},{" "}
              {props.restaurant.state} {props.restaurant.zip}
            </p>
            {props.restaurant.foodImg.map((foodImg) => {
              return <img src={foodImg} />;
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Restaurant;
