import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"

type PropsDialogType = {
  name:string
  id:number
}

const Dialog:FC<PropsDialogType> = ({name, id}) => {
  let path = "/dialogs" + id;
  return (
    <div className={s.dialog + " " + s.active}>
    <img src="https://i.pinimg.com/736x/ad/87/32/ad8732ba48b5268517da6f186999ce4f.jpg" alt="Аватарка"/>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default Dialog;
