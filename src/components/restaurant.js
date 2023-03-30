import react, { useState } from "react";

const Restaurant = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleShow = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <>
      <div className="d-flex-column tile space-between align-center">
        <div>
          <img src={props.restaurant.restImg} className="img corners shadow" />
        </div>
        <h3 className="name-wrap">{props.restaurant.restName}</h3>
        <p>{props.restaurant.price}</p>
        {props.restaurant.ranking === "***" ? (
          <>
            <div className="d-flex-row">
              <img src="./star.svg" className="icon-sm"></img>
              <img src="./star.svg" className="icon-sm"></img>
              <img src="./star.svg" className="icon-sm"></img>
            </div>
          </>
        ) : props.restaurant.ranking === "**" ? (
          <>
            <div className="d-flex-row">
              <img src="./star.svg" className="icon-sm"></img>
              <img src="./star.svg" className="icon-sm"></img>
            </div>
          </>
        ) : props.restaurant.ranking === "*" ? (
          <>
            <div className="d-flex-row">
              <img src="./star.svg" className="icon-sm"></img>
            </div>
          </>
        ) : props.restaurant.ranking === "#" ? (
          <>
            <div className="d-flex-row">
              <img src="./bib-gourmand.svg" className="icon-sm"></img>
            </div>
          </>
        ) : null}
        <button
          type="button"
          onClick={toggleShow}
          className="button corners shadow"
        >
          Show More Info
        </button>
        {showMoreInfo ? (
          <>
            <p className="name-wrap">
              {props.restaurant.address}, {props.restaurant.city},{" "}
              {props.restaurant.state} {props.restaurant.zip}
            </p>
            {props.restaurant.foodImg.map((foodImg) => {
              return <img src={foodImg} className="img corners shadow" />;
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Restaurant;
