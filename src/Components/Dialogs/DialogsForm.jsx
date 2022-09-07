import { Field, reduxForm } from "redux-form";

const DialogsForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} >
        <div>
          <Field placeholder={"Enter your message"} name={"dialogs"} component={"textarea"} />
        </div>
        <button>add Message</button>
      </form>
    );
  };

const DialogsReduxForm = reduxForm({ form: "dialog" })(DialogsForm);

export default DialogsReduxForm