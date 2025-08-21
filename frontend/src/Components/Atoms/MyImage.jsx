import PropTypes from 'prop-types'
import React from 'react'
import MyInputs from './MyInput'

const MyImage = ({src, alt, className}) => {
  return (
    <img src={src} alt={alt} className={className|| ""} />
  )
}

MyImage.propTypes = {
  src : PropTypes.string.isRequired,
  alt : PropTypes.string,
  className: PropTypes.string,
}

MyInputs.defaultProps = {
  src:"",
  alt:'',
  className:'',
}

export default MyImage