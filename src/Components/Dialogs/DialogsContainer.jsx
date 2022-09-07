import Dialogs from "./Dialogs";
import {
  sendMessageCreater,
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
    sendMessage: (body) => dispatch(sendMessageCreater(body)),
  };
};


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
