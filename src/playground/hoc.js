// Higher order component (HOC)
// react component that renders another component
// to reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: { props.info }</p>
  </div>
)

const withAdaminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is privite info. Please don't share!</p> }
      <WrappedComponent { ...props }/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return props => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent { ...props } />
      ) : (
        <p>Please login to view info.</p>
      ) }
    </div>
  )
}

const AdminInfo = withAdaminWarning(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin={ true } info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={ true } info="These are the details" />, document.getElementById('app'))
