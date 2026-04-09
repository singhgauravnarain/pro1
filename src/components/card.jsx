import React from 'react'
import {Bookmark} from 'lucide-react'
import {FileHeart} from 'lucide-react'

const card = (props) => {
  return (
    <>
        <div className='card'>
            <center>
            <h2>{props.name}</h2>
            <h4>{props.age}</h4>
            <p>Today is Friday i am taking react class</p>
            <Bookmark />
            <FileHeart />
            </center>
        </div>
    </>
  )
}

export default card