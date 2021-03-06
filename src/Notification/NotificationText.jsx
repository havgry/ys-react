import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NotificationText = ({
  children,
  className,
  ...props
}) => {
  const wrapperProps = {
    className: classNames(
      'ys-notification__text',
      className,
    ),
    ...props,
  }

  return (
    <p {...wrapperProps}>
      {children}
    </p>
  )
}

NotificationText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NotificationText.defaultProps = {
  className: '',
}

export default NotificationText
