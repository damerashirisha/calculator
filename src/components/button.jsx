import React from 'react'
import Keypad from './keypad'

const Button = (props) => {
    console.log(props)
  return (
    <>
      <button onClick={props.onClick} value={props.value}>{props.value}</button>
    </>
  )
}

export default Button
