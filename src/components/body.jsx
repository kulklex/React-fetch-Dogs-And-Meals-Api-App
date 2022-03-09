import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default function Body() {
 const [items, setitems] = useState([])

 useEffect(() => { 
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res)=> {

        setitems(res.data.meals)
    })
    .catch((err) => {
        console.log(err)
    })
 }, [])


 const itemslist = items.map((item) => {
     return <div key={item.id} className="col-md-4">
         <p style={{fontWeight: 'bold'}}>{item.strMeal}</p>
         <img src={item.strMealThumb} className='img-fluid' style={{
             margin: '20px', borderRadius: '5px', height: '200px', width: '200px'
         }}/>
         <p>{item.idMeal}</p>
     </div>
 })
    return (
        <div>
            
        <div className="row">
            {itemslist}
        </div>

        </div>
    )
}
