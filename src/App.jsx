import React from 'react'
import Card from "./components/card"
import data from "./data.json"
const App = () => {
 
  return (
    <>
      {data.map(function(obj)
        {
          return <Card name={obj.name} age={obj.age}/>
        }  
    )}
       
    
    </>

  )
}

export default App