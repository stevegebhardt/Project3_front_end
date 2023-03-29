import {useState} from 'react'
import "./searchbar.css"

const Search = ({placeholder, data}) =>{

    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (event) =>{
       const searchWord = event.target.value
       const newFilter = data.filter((value) => {
        return value.city.toLowerCase().includes(searchWord.toLowerCase())
       })

       if(searchWord === ""){
        setFilteredData([])
       }else{
        setFilteredData(newFilter)
       }
    }

    return(
        <div className="search">
            <div className="searchInputs">
                <label>Search: </label>
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div classname="searchIcon"></div>
            </div>
            {filteredData.length != 0 && 
            <div className="dataResults">
                {filteredData.map((value, key) =>{
                    return(
                        <a href=""><p className="dataItem">{value.restName}</p></a>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default Search