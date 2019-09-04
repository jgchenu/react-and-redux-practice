import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func
  }

  handleClick(ev) {
    ev.preventDefault();
    this.props.onClick();
  }

  render() {
    const { active, children } = this.props;
    if (active) {
      return <b className="filter selected">{children}</b>;
    } else {
      return (
        <a href="/" className="filter not-selected" onClick={this.handleClick}>
          {children}
        </a>
      );
    }
  }
}


export default Link;
