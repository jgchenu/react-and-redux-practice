import React from 'react';
import PropTypes from 'prop-types';
import store from '@/redux/store';
import * as actions from '@/redux/actions';



class Counter extends React.Component {
  static defaultProps = {
    initValue:0
  }

  static propTypes = {
    initValue: PropTypes.number,
    caption: PropTypes.string.isRequired
  }

  constructor(props) {
    super (props) ;
    this.onClickIncrementButton =  this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton =  this.onClickDecrementButton.bind(this);
    this.onChange =  this.onChange.bind(this);
    this.state=this.getOwnState();
    console.log('enter constructor', this.props.caption)
  }

  getOwnState(){
    return {
      count: store.getState()[this.props.caption]
    };
  }

  componentWillMount(){
    console.log('enter componentWillMount', this.props.caption)
  }

  componentDidMount(){
    console.log('enter componentDidMount', this.props.caption)
    store.subscribe(this.onChange);
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }

  componentWillReceiveProps(){
    console.log('enter componentWillReceiveProps', this.props.caption)
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('enter shouldComponentUpdate', this.props.caption);
    return nextProps.caption !== this.props.caption || nextState.count !== this.state.count
  }

  onClickIncrementButton(){
    store.dispatch(actions.createIncrement(this.props.caption));
  }

  onClickDecrementButton(){
    store.dispatch(actions.createDecrement(this.props.caption));
  }

  render(){
    console.log('enter render', this.props.caption);
    const { caption } = this.props;
    return (
      <div>
        <button onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

export default Counter;