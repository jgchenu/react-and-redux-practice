import React from 'react';
import store from '@/redux/store';
class Summary extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  componentDidMount(){
    store.subscribe(this.onChange);
  }

  componentWillUnmount(){
    store.unsubscribe(this.onChange);
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState () {
    const state= store.getState();
    let sum = 0;
    for (var key in state) {
      if (state.hasOwnProperty(key)) {
      sum += state[key] ;
      }
    }
    return { sum: sum };
  }

  render() {
    return (
      <p>{this.state.sum}</p>
    )
  }
}

export default Summary;