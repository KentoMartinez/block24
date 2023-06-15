import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './App.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(puppyList);
  return (

    <div className="app">
      { 
   puppies.map((puppy) => {
     return<p
     onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
     <h3 className='name'>{puppy.name}</h3>
     </p>
   })
} {featPupId && (
        <div>
          <h2 className='popName'>{featuredPup.name}</h2>
          <ul className='info'>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Owner: {featuredPup.ownerId}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
