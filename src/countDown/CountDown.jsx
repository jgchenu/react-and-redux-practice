import React from 'react';
import PropTypes from 'prop-types';
class CountDown extends React.Component {
  static propTypes = {
    startCount: PropTypes.number.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      count: this.props.startCount
    }
  }

  componentDidMount() {
    this.interval = setInterval(()=>{
      const count  =  this.state.count;
      if(count <= 0) {
        clearInterval(this.interval);
        return this.setState({count: 0})
      }
      this.setState({
        count: count - 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    if(this.interval){
      clearInterval(this.interval);
    }
  }
  
  render() {
    return this.props.children(this.state.count);
  }
}

export default CountDown;