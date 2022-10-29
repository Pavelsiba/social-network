import Dialogs from "./Dialogs";
import { sendMessageAC } from "../../Redux/dialogs-reducer.ts";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsReducer,
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (body) => dispatch(sendMessageAC(body)),
  };
}; */

export default compose(
  connect(mapStateToProps, {sendMessageAC}),
  withAuthRedirect
)(Dialogs);
