import React from 'react'
import {Link} from 'react-router'
import './App.css'

const App = ({children, location: {pathname}}) => {
  const isActive = type => pathname.indexOf(type) >= 0
  return (
    <div className='app'>
      <div className='app-sidebar'>
        <Link
          className={`app-menu-item ${isActive('departments') ? 'active' : ''}`}
          to='/departments'
        >
          Departments
        </Link>

        <Link
          className={`app-menu-item ${isActive('employees') ? 'active' : ''}`}
          to='/employees'
        >
          Employees
        </Link>
      </div>

      <div className='app-content'>
        {children}
      </div>
    </div>
  )

}
App.propTypes = {
  children: React.PropTypes.node
}

export default App
