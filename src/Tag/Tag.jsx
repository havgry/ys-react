import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../base.css'
import '@youseedk/dna/css/elements/ys-tag.css'

const Tag = (props) => {
  const {
    label,
    className,
  } = props

  const wrapperProps = {
    className: classNames(
      'ys-tag',
      className,
    ),
  }

  return (
    <span
      {...wrapperProps}
    >
      {label}
    </span>
  )
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Tag.defaultProps = {
  className: '',
}

export default Tag