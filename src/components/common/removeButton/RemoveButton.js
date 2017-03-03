import React from 'react'
import './RemoveButton.css'

const RemoveButton = ({onClick}) => (
  <button className='remove-button' onClick={onClick}>
    <div className='remove-button-label'/>
  </button>
)

RemoveButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
}

export default RemoveButton
