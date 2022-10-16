import { Form, isEmail, isRequired } from "@altiore/form";
import Field from "../Common/Fields/Fields";
import { login } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import fon from "../../background.jpg";
import Icon from "./Icon";
import style from "./login.module.css";
import Button from "./Button";
/* const fixError = (value) => {
  if (value ===undefined || value===null || value==="") {
    return "По-любому Обязательное поле"
} return undefined} */

const Login = ({ login, isAuth, captchaUrl, loginError }) => {
  const handleSubmit = (values) => {
    login(values.email, values.password, values.rememberMe, values.captcha);
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <Wrapper>
      <MainContainer>
        <WelcomeText>Login</WelcomeText>
        <Form onSubmit={handleSubmit} className={style.forma}>
          <Field.Email
            name="email"
            placeholder="E-mail"
            Element={StyledInput}
            validate={[isEmail(), isRequired()]}
            autoComplete="current-email"
          />
          <Field.Pass
            name="password"
            autoComplete="current-password"
            placeholder="password"
            Element={StyledInput}
            validate={[isRequired()]}
          />
          <Field.CheckBox name="rememberMe" label="remember Me" />
          {captchaUrl && (
            <div>
              <img src={captchaUrl} alt="капча" />
              <Field.Text
                name="captcha"
                placeholder="Symbols from image"
                validate={isRequired()}
              />
              <div>{loginError}</div>
            </div>
          )}
          <ButtonContainer>
            <Button type="submit" content="Sign Up" />
          </ButtonContainer>
          <LoginWith>OR LOGIN WITH</LoginWith>
        </Form>
        <HorizontalRule />
        <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebook />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconsContainer>
      </MainContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.authReducer.captchaUrl,
  isAuth: state.authReducer.isAuth,
  loginError: state.authReducer.error,
});

        //Секция стилей styled component

const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

const Wrapper = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  height: 80 vh;
  width: 40 vw;
  align-items: center;
  color: white;
  background-image: url("${fon}");
`;

const MainContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70 vh;
  width: 25 vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 40vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;
const ButtonContainer = styled.div`
  margin: 3rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 300px;
  height: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #fff;
  ${"" /* color: #3c354e; */}
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
export default connect(mapStateToProps, { login })(Login);
