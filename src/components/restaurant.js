import react, { useState } from "react";

const Restaurant = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleShow = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <>
      <div className="card mb-4 box-shadow">
        <div className="carc-img-top">
          <img src={props.restaurant.restImg} />
        </div>
        <div className="card-body">
          <h5 className="card-text">{props.restaurant.restName}</h5>
          <p className="card-text">{props.restaurant.price}</p>
          {props.restaurant.ranking === "***" ? (
            <>
            <div className="star-div">
              <div className='inside'>
              <img src="https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" className="card-text"></img>
              </div>
              <div className='inside'>
              <img src="https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" className="card-text"></img>
              </div>
              <div className='inside'>
              <img src="https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" className="card-text"></img>
              </div>
            </div>
            </>
          ) : props.restaurant.ranking === "**" ? (
            <>
              <div className="star-div">
              <div className='inside'>
              <img src="https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" className="card-text"></img>
              </div>
              <div className='inside'>
              <img src="https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" className="card-text"></img>
              </div>
              </div>
            </>
          ) : props.restaurant.ranking === "*" ? (
            <>
              <div className="star-div">
              <div className='inside'>
              <img src="https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" className="card-text"></img>
              </div>
              </div>
            </>
          ) : props.restaurant.ranking === "#" ? (
            <>
              <img src="./bib-gourmand.svg" className="card-text"></img>
            </>
          ) : props.restaurant.ranking === "" ?(
            <>
            <div><br/></div>
            </>
          ): null}
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
