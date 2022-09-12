import { connect } from "react-redux"
import { setEmail } from "../../Redux/auth-reducer"
import Login from "./login"

const LoginContainer = connect (null,{setEmail})(Login)

export default LoginContainer;