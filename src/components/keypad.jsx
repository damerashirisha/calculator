import React from 'react'
import Button from './button'
import './style.css'

const Keypad = (props) => {
  console.log('keypad'+props)
  return (
    <>
    <div className='container fluid'>
    <div className='row'>
      <Button value='7' className='btn' onClick={props.onClick} />
      <Button value='8' className='btn' onClick={props.onClick}/>
      <Button value='9' className='btn' onClick={props.onClick}/>
      <Button value='*' className='btn' onClick={props.onClick} />
    </div>
    <div className='row'>
    <Button value='4' className="btn" onClick={props.onClick}/>
    <Button value='5' className="btn" onClick={props.onClick}/>
    <Button value='6' className="btn" onClick={props.onClick}/>
    <Button value='-' className="btn" onClick={props.onClick}/>
  </div>
  <div className='row'>
    <Button value='1' className='btn' onClick={props.onClick} />
    <Button value='2' className='btn' onClick={props.onClick} />
    <Button value='3' className='btn' onClick={props.onClick}/>
    <Button value='+' className='btn' onClick={props.onClick} />
  </div>
  <div className='row'> 
    <Button value='.' className='btn'  onClick={props.onClick}/>
    <Button value='C' className='backbtn'  onClick={props.onClick}/>
    <Button value='AC' className='resetbtn' onClick={props.onClick}/>
    <Button value='=' className='btn'onClick={props.onClick}/>
  </div>
  </div>
  </>
  )
}

export default Keypad
