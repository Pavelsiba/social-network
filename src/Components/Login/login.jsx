import { Form, isEmail, isRequired } from "@altiore/form";
import { useCallback } from "react";
import Field from "../Common/Fields/Fields";
import { setEmail } from "../../Redux/auth-reducer"
import { connect } from "react-redux";

const Login = ({ setEmail }) => {
  const handleSubmit = useCallback(
    (values) => {
      setEmail(values.email)
      console.log('data:', values)
    },
    [setEmail], 
  );

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Field.Email label="E-mail" name="email" validate={[isEmail(), isRequired()]} autoComplete="current-email" />
        <Field.Pass label="Password" name="pass" autoComplete="current-password"/>
        <Field.Textarea name="textarea" />
        <button type="submit">Войти</button>
      </Form>
    </div>
  );
};

export default connect (null, {setEmail })(Login)
