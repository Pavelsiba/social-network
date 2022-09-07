import Dialogs from "./Dialogs";
import {
  sendMessageCreater,
  updateNewMessageBodyCreater,
} from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import {compose} from 'redux'


let mapStateToProps = (state) => {
  return {
    state: state.dialogsReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageCreater()),
    updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreater(body)),
  };
};

export default compose (
  connect (mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs);
