import React from 'react'
import classNames from 'classnames'

export class TagButton extends React.Component {
  render() {
    const { className,
            tag,
            modifier,
            children,
            selected,
            ...others } = this.props

    const tagButtonClassNames = classNames(
      'k-TagButton',
      className,
      `k-TagButton--${modifier}`,
      { 'is-selected': selected },
    )

    const Tag = tag

    return (
      <Tag className={ tagButtonClassNames } { ...others }>
        { children }
      </Tag>
    )
  }
}

TagButton.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  children: 'Tag',
  selected: false,
}
