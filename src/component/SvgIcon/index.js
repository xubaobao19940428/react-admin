import React, { Component } from 'react';
import 'style-loader!css-loader!./style.css';

class SvgIcon extends Component {
  render() {
    const iconName = `#icon-${this.props.iconClass}`;
    return (
      <svg className="svg-icon" aria-hidden="true">
        <use xlinkHref={ iconName }></use>
      </svg>
    )
  }
}

export default SvgIcon;