import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor, center }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    justifyContent: center,
  }

  return (
    <header style={headerStyles} >
        <div className="continer">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback Application',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
    center: 'center',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
