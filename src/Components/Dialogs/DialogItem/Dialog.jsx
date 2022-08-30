import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"

const Dialog = (props) => {
  let path = "/dialogs" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
    <img src="https://i.pinimg.com/736x/ad/87/32/ad8732ba48b5268517da6f186999ce4f.jpg" alt="Аватарка"/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
