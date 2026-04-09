import React from 'react'
import Card from "./components/card"
const App = () => {
  const arr=[
   { "name": "Aarav", "age": 25 },
  { "name": "Priya", "age": 30 },
  { "name": "Rohan", "age": 22 },
  { "name": "Meera", "age": 28 },
  { "name": "Kabir", "age": 35 },
  { "name": "Ananya", "age": 27 },
  { "name": "Vikram", "age": 40 } 

  ]
  return (
    <>
      {arr.map(function(obj)
        {
          return <Card name={obj.name} age={obj.age}/>
        }  
    )}
       
    
    </>

  )
}

export default App