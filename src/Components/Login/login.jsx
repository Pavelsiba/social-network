import { Form, isEmail, isRequired } from "@altiore/form";
import Field from "../Common/Fields/Fields";
import { login } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

/* const fixError = (value) => {
  if (value ===undefined || value===null || value==="") {
    return "По-любому Обязательное поле"
} return undefined} */

const Login = ({login, isAuth, captchaUrl, loginError}) => {

  const handleSubmit = (values => {
      login(values.email, values.password, values.rememberMe, values.captcha);
    }
  );

  if(isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Field.Email name="email" placeholder="E-mail" validate={[isEmail(), isRequired()]} autoComplete="current-email"/>
        <Field.Pass name="password" autoComplete="current-password" placeholder="password" />
        <Field.CheckBox name="rememberMe" label="remember Me"/>
        {captchaUrl && <div>
                          <img src={captchaUrl} alt="капча" />
                          <Field.Text name="captcha" placeholder="Symbols from image" validate={isRequired()}/>
                          <div>{loginError}</div>
                       </div>
        }
        <button type="submit">Войти</button> 
      </Form>
    </div>
  );
};

const mapStateToProps =(state) => ({ 
  captchaUrl: state.authReducer.captchaUrl,
  isAuth: state.authReducer.isAuth,
  loginError: state.authReducer.error
})

export default connect(mapStateToProps, { login })(Login);
