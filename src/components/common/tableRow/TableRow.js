import React from 'react'
import classNames from 'classnames'
import './TableRow.css'

const TableRow = ({columns, header, sizes}) => {
  const rowClass = classNames('table-row', {header})

  return (
    <div className={rowClass}>
      {columns.map((column, index) => {
        const itemClass = classNames(
          'table-row-item',
          {
            header,
            last: index === columns.length - 1
          }
        )

        return (
          <div
            className={itemClass}
            key={index}
            style={sizes ? {width: sizes[index]} : {}}
          >
            {column}
          </div>
        )
      })}
    </div>
  )
}

TableRow.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  header: React.PropTypes.bool,
  sizes: React.PropTypes.array
}

export default TableRow
