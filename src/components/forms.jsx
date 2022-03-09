import React, {useState} from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'


export default function Forms() {
  const [firstName, setfirstName] = useState('');
  const [email, setemail] = useState('');
  const [people, setpeople] = useState([])

       const hadleSubmit = (e)=> {
           e.preventDefault();
          if(firstName && email) {
              const person = {id:new Date().getTime(), firstName: firstName, email: email}
                console.log(person);
                setpeople((people)=> {
                    return [...people, person];
                });
                setfirstName('');
                setemail('')
          } else {
              console.log('empty value')
          }
       }
    
  return (
    <div>
        <article>
            <form className='form' onSubmit={hadleSubmit}>
                <div className='form-control'>
                    <label htmlFor="firstName">Name : </label>
                    <input  
                    type='text'
                    id='firstName' 
                    name='firstName' 
                    value={firstName}
                    onChange={(e)=> setfirstName(e.target.value)}
                    ></input>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email : </label>
                    <input 
                    type='email' 
                    id='email' 
                    name='email'
                    value={email}
                    onChange={(e) => {setemail(e.target.value)}}
                    ></input>
                </div>
                <button className='btn' type='submit'>Add</button>
            </form>
            {
                people.map((persons)=> {
                 const {id, firstName, email} = persons
                 return <div>
                     <h4>{firstName}</h4>
                     <p>{email}</p>
                     <small>{persons.id}</small> 
                 </div>
                })
            }
        </article>
    </div>
  )
}
