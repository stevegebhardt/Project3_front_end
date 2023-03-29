import react, { useState } from "react";

<<<<<<< HEAD
const Restaurant = (props) =>{ 
    return(
        <>
        
            <div class="image">
                <img src={props.restaurant.restImg}/>
            </div>
            <p>{props.restaurant.restName}</p>
            <p>{props.restaurant.price}</p>
            <p>{props.restaurant.ranking}</p>
            <p>{props.restaurant.adress}</p>
       
        
        </>
    )
}
=======
const Restaurant = (props) => {
  return (
    <>
      <div className="container">
        <div>
          <img src={props.restaurant.restImg} />
        </div>
        <h3>{props.restaurant.restName}</h3>
        <p>{props.restaurant.price}</p>
        <p>{props.restaurant.ranking}</p>
        <p>{props.restaurant.adress}</p>
      </div>
    </>
  );
};
>>>>>>> 187e231bea110250b892d42d1881b4d4bb3539a5

export default Restaurant;
