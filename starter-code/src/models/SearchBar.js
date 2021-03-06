import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
        textareaInputValue: ""
    }
  }

  handleChange = (event) =>{
    this.setState({
      textareaInputValue: event.target.value
    })
  }

  render(){
    return(
    <div className="box column is-12">
      <label> Search food: </label>
      <textarea name="textareaInputValue" value={this.props.inputValue} onChange={e => this.props.Filter(e.target.value)}/>
    </div>
    )
  }
}

export default SearchBar;