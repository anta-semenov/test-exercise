import React from 'react'
import './AddButton.css'

const AddButton = ({onClick, label}) => (
  <button className='add-button' onClick={onClick}>{label}</button>
)

AddButton.propTypes = {
  label: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
}

export default AddButton
