import { Field, reduxForm } from "redux-form";
/* import {required, maxLengthCreator} from '../../../Utilitis/Validators/Validator' */

/* const maxLength10 = maxLengthCreator(10) */

const MyPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} >
        <div>
          <Field placeholder={"Enter your message"} name={"mypost"} component={"textarea"} 
           />
        </div>
        <button>add Message</button>
      </form>
    );
  };

const MyPostReduxForm = reduxForm({ form: "mypost" })(MyPostForm);

export default MyPostReduxForm