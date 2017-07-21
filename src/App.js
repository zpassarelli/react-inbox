import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import MessageList from './components/MessageList';
import data from './messages';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      messages: data,
    }
  }

  select = (id) => {
    let messages = this.state.messages;
    let selectee = messages.find(message => message.id === id);
    selectee.selected = !selectee.selected;
    this.setState({messages:messages});
  }
  selectAll = () => {
    let messages = this.state.messages;
    let status = messages.every(message => message.selected === true);
    messages.map(message => message.selected = !status);
    this.setState({messages:messages});
  }
  star = () => {
    console.log('starred');
  }
  label = (term) => {
    console.log('labelled',term);
  }
  unread = (action) => {
    console.log('marked',action);
  }

  trash = () => {
    console.log('trash');
  }


  render() {
    return (
      <div className="container">
        <h3>React Inbox</h3>
        <Toolbar messages={this.state.messages} selectAll={this.selectAll} trash={this.trash} unread={this.unread} label={this.label} />
        <MessageList messages={this.state.messages} select={this.select} star={this.star} />
      </div>
    );
  }
}

export default App;
