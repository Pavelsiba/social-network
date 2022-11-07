import React, {FC} from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./MessageItem/Message";
import Answer from "./AnswerItem/Answer";
import { Form } from "@altiore/form";
import Field from "../Common/Fields/Fields";
import { DialogsInitialStateType, dialogsType, messagesType, answersType} from "../../Redux/dialogs-reducer";

type MapStatePropsType ={
  state: DialogsInitialStateType}

type MapDispatchPropsType = {
  sendMessageAC:(body: string)=>void
}

interface FormState {
  name: string
  dialogs: string
  inputProps: string
  label?: string
  autoComplete?: string
  placeholder?: string
}

type DialogsType = MapStatePropsType & MapDispatchPropsType&FormState

const Dialogs:FC<DialogsType> = ({sendMessageAC,state}) => {
  
  const handleSubmit =(values:FormState) => {sendMessageAC(values.dialogs)}
  

  let Dialogs = state.dialogsData.map((d:dialogsType) => (
    <Dialog name={d.name} key={d.id} id={d.id} />
  ));

  let Messages = state.messagesData.map((m:messagesType) => (
    <Message message={m.message} key={m.id} />
  ));

  let Answers = state.answersData.map((a:answersType) => (
    <Answer answer={a.answer} key={a.id} />
  ));

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
          <Form<FormState> onSubmit={handleSubmit}>
            <Field.Textarea name="dialogs" />
            <button type="submit">Отправить</button>
          </Form>
        </div>
        <div className={s.answersArea}>
          <h2>Answers</h2>
          <div>
            <div>{Answers}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

/* <textarea value={newMessageBody}
onChange={onNewMessageChange}
placeholder="Enter your message"></textarea> <br />
<button onClick = {onSendMessageClick}>add Message</button> */
