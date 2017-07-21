import React from 'react';

class Toolbar extends React.Component {

  // getUnread = () => {
  //   let count = this.props.messages.filter(message => message.read === false).length;
  //   this.setState({unread: count});
  // }
  //
  // getSelectIcon = () => {
  //   let count = this.props.messages.filter(message => message.selected).length;
  //    "fa fa-square-o";
  // }
  //
  // noneSelected = () => {
  //   return !this.props.messages.some(message => message.selected);
  // }

  render() {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread {5 === 1 ? 'message' : 'messages'}
          </p>

          <button className="btn btn-default" onClick={this.props.selectAll}>
            <i className="fa fa-square-o"></i>
          </button>

          <button className="btn btn-default" onClick={()=>this.props.unread('read')} disabled={false}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={()=>this.props.unread('unread')} disabled={false}>
            Mark As Unread
          </button>

          <select value="applyDef" className="form-control label-select" onChange={this.props.label} disabled={false}>
            <option value="applyDef" disabled>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select value="removeDef" className="form-control label-select" onChange={(event)=>this.props.label(event.target.value)} disabled={false}>
            <option value="removeDef" disabled>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={this.props.trash} disabled={false}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar;
