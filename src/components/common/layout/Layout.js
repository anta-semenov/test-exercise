import React from 'react'
import './Layout.css'

export const Layout = ({footer, children}) => (
  <div>
    {children}
    <div className='layout-footer'>
      {footer}
    </div>
  </div>
)

Layout.propTypes = {
  footer: React.PropTypes.node,
  children: React.PropTypes.node
}

export const Row = ({children}) => (
  <div className='row'>{children}</div>
)

Row.propTypes = {
  children: React.PropTypes.node
}
