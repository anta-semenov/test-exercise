import React from 'react'
import {AddButton, RemoveButton, TableRow, TextInput, Dropdown, Layout} from '../common'

const Employees = ({employees, addEmployee, departments}) => {
  const addButton = <AddButton label='+ Employee' onClick={addEmployee}/>
  const sizes = [141, 141, 170, 48]

  const renderEmployee = (employee) => {
    const {id, firstName, lastName, departmentId, deleteEmployee,
      onFirstNameChange, onLastNameChange, onDepartmentChange} = employee

    return (
      <TableRow
        key={id}
        columns={[
          <TextInput value={firstName} onChange={onFirstNameChange}/>,
          <TextInput value={lastName} onChange={onLastNameChange}/>,
          <Dropdown value={departmentId} onChange={onDepartmentChange} items={departments}/>,
          <RemoveButton onClick={deleteEmployee}/>
        ]}
        sizes={sizes}
      />
    )
  }

  return (
    <Layout footer={addButton}>
      <TableRow header columns={['First name', 'Last name', 'Department']} sizes={sizes}/>
      {employees.map(renderEmployee)}
    </Layout>
  )

}
Employees.propTypes = {
  employees: React.PropTypes.array,
  addEmployee: React.PropTypes.func
}

export default Employees
