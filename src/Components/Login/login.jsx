import { Form, isEmail, isRequired } from "@altiore/form";
import Field from "../Common/Fields/Fields";
import { login } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

/* const fixError = (value) => {
  if (value ===undefined || value===null || value==="") {
    return "По-любому Обязательное поле"
} return undefined} */

const Login = (props) => {
  const handleSubmit = (values => {
      props.login(values.email, values.password, values.rememberMe);
    }
  );

  if(props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Field.Email
          name="email"
          placeholder="E-mail"
          validate={[isEmail(), isRequired()]}
          autoComplete="current-email"
        />
        <Field.Pass
          name="password"
          autoComplete="current-password"
          placeholder="password"
        />
        <Field.CheckBox name="rememberMe" label="remember Me"/>
        <button type="submit">Войти</button>
      </Form>
    </div>
  );
};

const mapStateToProps =(state) => ({ 
  isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, { login })(Login);
