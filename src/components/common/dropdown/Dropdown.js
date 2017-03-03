import React from 'react'
import './Dropdown.css'

const Dropdown = ({value, items, onChange}) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {items.map(item => (
      <option value={item.id}>{item.name}</option>
    ))}
  </select>
)

Dropdown.propTypes = {
  value: React.PropTypes.string.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default Dropdown
