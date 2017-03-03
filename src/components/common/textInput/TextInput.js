import React from 'react'
import './TextInput.css'

const TextInput = ({value, onChange}) => (
  <input
    className='text-input'
    type='text'
    value={value}
    onChange={e => onChange(e.target.value)}
  />
)

TextInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
}

export default TextInput
