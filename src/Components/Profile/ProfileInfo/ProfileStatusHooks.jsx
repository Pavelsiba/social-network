import React, {useState, useEffect} from "react";


const ProfileStatusHooks = (props) => {

  let [editMode, setEditMode ] = useState(false);
  let [status, setStatus ] = useState(props.status);
  
  useEffect ( ()=> {
    setStatus(props.status)
  },[props.status])

  let activateEditMode = () => {
    return setEditMode(true);
  }

  let deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
    }
  

  return (
      <div>
        {!editMode &&
          <div>
            <span onDoubleClick={activateEditMode}> {props.status || 'No status'}</span>
          </div>
        }
        {editMode && (
          <div style={{width: '290px'}} >
            <input autoFocus onBlur={deActivateEditMode} onChange={onStatusChange} value={status} style={{width: '100%'}} /> 
          </div>
        )}
      </div>
    );
  }

export default ProfileStatusHooks;
