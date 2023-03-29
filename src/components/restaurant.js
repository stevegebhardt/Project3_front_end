//need to figure out how to display them !
//git isnt allowing me to push{test}

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

export default Restaurant 