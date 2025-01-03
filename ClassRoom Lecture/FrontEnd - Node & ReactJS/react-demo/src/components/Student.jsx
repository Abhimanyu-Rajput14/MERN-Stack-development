import React from 'react'

const Student = (props) => {
  return (
    <div style={{border:"2px solid black"}}>
        <p>Name:{props.Name}</p>
        <p>Class:{props.Class}</p>
    </div>
  )
}

export default Student