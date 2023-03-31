import react, { useState } from "react";
import Edit from "./edit";

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
          ) : props.restaurant.ranking === "" ? (
            <>
              <div><br /></div>
            </>
          ) : null}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
          <button type="button" className="btn btn-outline-dark" onClick={toggleShow}>
            Show More Info
          </button>
          <Edit
            restaurant={props.restaurant}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
          />
          </div>
          </div>
          {showMoreInfo ? (
            <>
              <div className="pop-up">
                <div className="pop-upcontent">
                  <p>
                    {props.restaurant.address}, {props.restaurant.city},{" "}
                    {props.restaurant.state} {props.restaurant.zip}
                  </p>
                  {props.restaurant.foodImg.map((foodImg) => {
                    return <img src={foodImg} />;
                  })}
                  <button type="button" className="btn btn-outline-dark" onClick={toggleShow}>
                    Back
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
