import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = ()=>{
    debugger;
    console.log('this:',this)
  this.setState({
    editMode: true
  })
  }

  deActivateEditMode =()=> {
    this.setState({
      editMode: false
    })
    }


  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}{" "}
        {this.state.editMode && (
          <div style={{width: '290px'}} >
            <input autoFocus onBlur={this.deActivateEditMode} value={this.props.status} style={{width: '100%'}} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
