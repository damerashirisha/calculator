import React from 'react'

const Display = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.data}</h1>
    </>
  )
}

export default Display
