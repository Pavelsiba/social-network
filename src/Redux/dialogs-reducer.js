const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogsData: [
    { id: 1, name: "Иван" },
    { id: 2, name: "Сергей" },
    { id: 3, name: "Света" },
    { id: 4, name: "Павел" },
    { id: 5, name: "Катя" },
    { id: 6, name: "Боря" },
  ],
  messagesData: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Все норм" },
    { id: 4, message: "Чем занимаешься," },
    { id: 5, message: "Изучаю реакт" },
    { id: 6, message: "Красаучик" },
  ],
  answersData: [
    { id: 1, answer: "Привет" },
    { id: 2, answer: "Как дела?" },
    { id: 3, answer: "Все норм" },
    { id: 4, answer: "Чем занимаешься," },
    { id: 5, answer: "Изучаю реакт" },
    { id: 6, answer: "Красаучик" },
  ],

  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
        newMessageBody:"",
      };
    default:
      return state;
  }
};

export const sendMessageCreater = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreater = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;

/* switch (action.type) {
  case SEND_MESSAGE: {
    let stateCopy = {...state};
    let body = stateCopy.dialogPage.newMessageBody;
    stateCopy.dialogPage.messagesData = [...state.dialogPage.messagesData];
    stateCopy.dialogPage.newMessageBody = "";
    stateCopy.dialogPage.messagesData.push({ id: 6, message: body });
    return stateCopy
  };

  case UPDATE_NEW_MESSAGE_BODY: {
    let stateCopy = {...state};
    stateCopy.dialogPage.newMessageBody = action.body;
    return stateCopy
  }; */
