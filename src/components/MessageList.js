import React from 'react';
import Message from '../components/Message';

class MessageList extends React.Component {

  render() {
    return (
      <div>
        {this.props.messages.map((oneMessage,index) => <Message key={index} message={oneMessage} select={this.props.select} star={this.props.star} />)}
      </div>
    )
  }

}

export default MessageList;
