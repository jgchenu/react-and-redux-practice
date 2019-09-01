import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {

  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.refInput = this.refInput.bind(this);
    this.onSubmit =  this.onSubmit.bind(this);
    this.state = { value: '' };
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.value.trim()) {
      this.props.onAddTodo(this.state.value);
      this.setState({
        value: ''
      })
    }
    this.input.focus();
  }

  refInput(node) {
    this.input = node;
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" className='add-todo-input' ref={this.refInput} value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" className='add-todo-submit'>add</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;