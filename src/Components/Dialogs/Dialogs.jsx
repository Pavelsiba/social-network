import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./MessageItem/Message";
import Answer from "./AnswerItem/Answer";

const Dialogs = (props) => {
  let state = props.state

  let Dialogs = state.dialogsData.map (d => <Dialog name={d.name} key={d.id} id={d.id} />);

  let Messages = state.messagesData.map (m => <Message message={m.message} key={m.id}/>);

  let Answers = state.answersData.map (a => <Answer answer={a.answer} key={a.id}/>);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = ()=> {
    props.sendMessage()
  }

  let onNewMessageChange = (e)=> {
    let body = e.target.value;
      props.updateNewMessageBody(body)
}

  return (
    <div>
      <div className={s.dialogArea}>
        <div className={s.dialogs}>
        <h2>Dialogs</h2>
        {Dialogs}</div>
        <div className={s.messages}>
        <h2>Messages</h2>
        <div>{Messages}</div>
        <textarea value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder="Enter your message"></textarea> <br />
        <button onClick = {onSendMessageClick}>add Message</button>

        </div>
        <div className={s.answersArea}>
          <h2>Answers</h2>
          <div className={s.answers}>
            <div className={s.answer}>{Answers}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
