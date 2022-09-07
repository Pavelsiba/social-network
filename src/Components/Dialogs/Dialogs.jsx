import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./MessageItem/Message";
import Answer from "./AnswerItem/Answer";
import DialogsReduxForm from "./DialogsForm";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.state;

  let Dialogs = state.dialogsData.map((d) => (
    <Dialog name={d.name} key={d.id} id={d.id} />
  ));

  let Messages = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let Answers = state.answersData.map((a) => (
    <Answer answer={a.answer} key={a.id} />
  ));

  let addNewMessage = (values)=> {
    props.sendMessage(values.dialogs)
  }

  if (!props.isAuth) return <Navigate to={"/Login"} />;

  return (
    <div>
      <div className={s.dialogArea}>
        <div className={s.dialogs}>
          <h2>Dialogs</h2>
          {Dialogs}
        </div>
        <div className={s.messages}>
          <h2>Messages</h2>
          <div>{Messages}</div>
          <DialogsReduxForm onSubmit={addNewMessage} />
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



