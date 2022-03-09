import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default function Dog() {
 const [dogs, setDogs] = useState(<img src=''/>)
    function getDog() {
        return setDogs(axios.get('https://dog.ceo/api/breeds/image/random')
        .then((res)=> {
          setDogs(res.data.message)
        })
        .catch((err)=> {
            console.log(err)
        })
        )
    }
 

    return (
        <div>
            <img src={dogs} className='img-fluid' style={{
             margin: '20px', borderRadius: '5px', height: '200px', width: '200px'
         }} />
        <button onClick={getDog} className='btn btn-warning' >Change Picture</button>
        </div>
    )
}

