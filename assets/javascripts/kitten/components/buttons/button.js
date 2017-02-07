import React from 'react'
import classNames from 'classnames'

export class Button extends React.Component {
  render() {
    const { className,
            tag,
            modifier,
            size,
            iconOnRight,
            ...others } = this.props

    let buttonClassNames = classNames(
      'k-Button',
      className,
      {
        [`k-Button--${modifier}`]: modifier,
        [`k-Button--${size}`]: size,
        'k-Button--iconRight': iconOnRight,
      },
    )

    const Tag = tag

    return (
      <Tag className={ buttonClassNames } { ...others } />
    )
  }
}

Button.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  iconOnRight: false,
}