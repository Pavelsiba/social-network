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



/* let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent); */

export default compose (
  connect (mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs);

/* const DialogsContainer = () => {
  return ( 
  <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsReducer.dialogPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreater());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreater(body));
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}; */
