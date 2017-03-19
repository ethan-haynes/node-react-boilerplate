import React, { PropTypes } from 'react'

const Header = ({ message }) => {
  return (
    <h2>
    { message }
    </h2>
  )
}

Header.propTypes = {
  message: PropTypes.string
}

Header.defaultProps = {
  message: 'Hello!!'
}

export default Header
