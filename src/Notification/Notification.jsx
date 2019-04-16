import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconUIExclamationMark from '@youseedk/dna/svg/ui-icons/exclamation-mark.svg'
import NotificationText from './NotificationText'

import '../base.css'
import '@youseedk/dna/css/icons/ys-icons.css'
import '@youseedk/dna/css/elements/ys-notification.css'

const Notification = (props) => {
  const {
    color,
    className,
    children,
    icon: Icon,
    displayIcon,
  } = props

  const wrapperProps = {
    className: classNames(
      'ys-notification',
      `ys-notification--${color}`,
      className,
    ),
  }

  return (
    <div {...wrapperProps}>
      { displayIcon
        && (
          <span
            className="ys-notification__icon"
            aria-hidden="true"
          >
            <Icon className="ys-icon" />
          </span>
        )
      }
      <div className="ys-notification__content">
        {children}
      </div>
    </div>
  )
}

const notificationTextType = PropTypes.shape({
  type: PropTypes.oneOf([NotificationText]),
})

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(notificationTextType),
    notificationTextType,
  ]).isRequired,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  icon: PropTypes.elementType,
  displayIcon: PropTypes.bool,
  className: PropTypes.string,
}

Notification.defaultProps = {
  color: 'info',
  icon: IconUIExclamationMark,
  displayIcon: true,
  className: '',
}

Notification.Text = NotificationText

export default Notification