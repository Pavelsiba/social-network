import Dialogs from "./Dialogs";
import { sendMessageAC, DialogsInitialStateType} from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {AppStateType} from "../../Redux/Redux-store"


type MapStatePropsType ={
  state: DialogsInitialStateType}

type MapDispatchPropsType = {
  sendMessageAC:(body: string)=>void
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    state: state.dialogsReducer,
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (body) => dispatch(sendMessageAC(body)),
  };
}; */

export default compose<AppStateType>(
  connect<MapStatePropsType, MapDispatchPropsType, null>(mapStateToProps, {sendMessageAC}),
  withAuthRedirect
)(Dialogs);
