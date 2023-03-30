//need to figure out how to display them !
//git isnt allowing me to push{test}

const Restaurant = (props) =>{ 
    return(
        <>
        <div className="card mb-4 box-shadow">
            <div className="card-img-top">
                <img src={props.restaurant.restImg}/>
            </div>
            <div className="card-body">
            <p className="card-text">{props.restaurant.restName}</p>
            <p className="card-text">{props.restaurant.price}</p>
            <p className="card-text">{props.restaurant.ranking}</p>
            <p className="card-text">{props.restaurant.address}</p>
            </div>
        </div>
        </>
    )
}

export default Restaurant 