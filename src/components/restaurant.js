//need to figure out how to display them !
//git isnt allowing me to push{test}

const Restaurant = (props) =>{ 
    return(
        <>
        <div class="container">
            <div>
                <img src={props.restaurant.restImg}/>
            </div>
            <h3>{props.restaurant.restName}</h3>
            <p>{props.restaurant.price}</p>
            <p>{props.restaurant.ranking}</p>
            <p>{props.restaurant.adress}</p>
        </div>
        
        </>
    )
}

export default Restaurant 