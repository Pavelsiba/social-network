import React, {FC} from 'react';
import s from './../Dialogs.module.css';

type  MessageType = {
  message: string
  key: number
}

const Message:FC<MessageType> = ({message}) => <div className={s.messages}>
{message}</div>;


export default Message;
