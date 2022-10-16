
const SEND_MESSAGE = "network/dialogsReducer/SEND_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
 
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, message: action.body }],
        newMessageBody:"",
      };
    default:
      return state;
  }
};

export const sendMessageAC = (body) => ({
  type: SEND_MESSAGE,
  body
})

export default dialogsReducer;
