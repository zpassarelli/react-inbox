import React from 'react';

class Message extends React.Component {

  getPostClass = () => {
    return 'row message'+(this.props.message.read ? ' read':' unread')+(this.props.message.selected === true ?' selected':'');
  }

  getCheck = () => {
    return this.props.message.selected === true ? true : false;
  }

  getStar = () => {
    return this.props.message.starred ? 'star fa fa-star' : 'star fa fa-star-o';
  }

  render() {
    return (
      <div className={this.getPostClass()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.getCheck()} onChange={()=>this.props.select(this.props.message.id)} />
            </div>
            <div className="col-xs-2">
              <i className={this.getStar()} onClick={()=>this.props.star(this.props.message.id)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a>
            {this.props.message.subject}
          </a>
        </div>
      </div>
    )
  }
}

export default Message;
