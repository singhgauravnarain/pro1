import React from 'react' 

const card = (props) => {
  return (
    <>
        <div className='card'>
            <center>
            <h2>{props.name}</h2>
            <h4>{props.age}</h4>
            <p>Today is Friday i am taking react class</p>
             
            </center>
        </div>
    </>
  )
}

export default card