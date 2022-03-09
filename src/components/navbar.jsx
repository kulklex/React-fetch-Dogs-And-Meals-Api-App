import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import App from '../App'


export default function Navbar() {
    return (
        <div style={{backgroundColor: ' #ffb199' }}>
            <h1>Meals</h1>
            <span className=' text-center'>
            <a href='' style={{margin: '10px', color: 'white'}}>Home</a>
            <a href='' style={{margin: '10px', color: 'white'}}>Order</a>
            <a href='' style={{margin: '10px', color: 'white'}}>Contact Us</a>
            </span>

            
        </div>
    )
}