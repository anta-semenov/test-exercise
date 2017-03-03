import React from 'react'
import {RemoveButton, AddButton, TableRow, TextInput, Layout} from '../common'

const Departments = ({departments, addDepartment}) => {
  const addButton = <AddButton label='+ Department' onClick={addDepartment}/>

  return (
    <Layout footer={addButton}>
      <TableRow header columns={['Departments']} key='header'/>
      {departments.map(({id, value, onChange, deleteDeparment})=> (
        <TableRow
          key={id}
          columns={[
            <TextInput value={value} onChange={onChange}/>,
            <RemoveButton onClick={deleteDeparment}/>
          ]}
        />
      ))}
    </Layout>
  )
}

Departments.propTypes = {
  departments: React.PropTypes.array.isRequired
}

export default Departments
