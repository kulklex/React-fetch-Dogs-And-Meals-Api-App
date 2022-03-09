import React, {useState, useReducer, useContext} from 'react'

export default function Reducer() {
   
    const data = [
        {id: 1, name: 'hassan'},
        {id: 2, name: 'hanna'},
        {id: 3, name: 'hassanah'},
        {id: 4, name: 'hamsah'}

    ]
    
    const [people, setpeople] = useState(data)

    const removePerson = (id) => {
        setpeople((people.filter((person) => person.id !== id)))
    }
    const PersonProvider = React.createContext();

     const PropDrolling = () => {
         return <PersonProvider.Provider value='hello'>
             <List people={people} removePerson={removePerson} />
         </PersonProvider.Provider >
     }
     

     const List = (props) => {
         const dated = useContext(PersonProvider);
         console.log(dated)
         return <>
            {people.map((person) => {
                return <div key={person.id}>
                 <h2> {person.id}, {person.name}</h2>
                 <button type='button' className='btn' onClick={() => props.removePerson}>Remove</button>
                </div>
            })}
         </>
     }

     


  return <div>
      <div>
         <PropDrolling />
     </div>
  </div>
}
  

