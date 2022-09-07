import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
