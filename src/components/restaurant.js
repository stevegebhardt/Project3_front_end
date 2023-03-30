import react, { useState } from "react";

const Restaurant = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleShow = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <>
      <div className="card-mb4 box-shadow">
        <div className="carc-img-top">
          <img src={props.restaurant.restImg} />
        </div>
        <div className="card-body">
          <p className="card-text">{props.restaurant.restName}</p>
          <p className="card-text">{props.restaurant.price}</p>
          {props.restaurant.ranking === "***" ? (
            <>
              <img src="./star.svg" className="card-text"></img>
              <img src="./star.svg" className="card-text"></img>
              <img src="./star.svg" className="card-text"></img>
            </>
          ) : props.restaurant.ranking === "**" ? (
            <>
              <img src="./star.svg" className="card-text"></img>
              <img src="./star.svg" className="card-text"></img>
            </>
          ) : props.restaurant.ranking === "*" ? (
            <>
              <img src="./star.svg" className="card-text"></img>
            </>
          ) : props.restaurant.ranking === "#" ? (
            <>
              <img src="./bib-gourmand.svg" className="card-text"></img>
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
      </div>
    </>
  );
};

export default Restaurant;
