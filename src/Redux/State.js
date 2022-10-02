/* let rerenderEntireTree

let state = {

    profilePage:
        {postsData: [
        { id: 1, message: "Привет", likeCount: 10 },
        { id: 2, message: "Как дела?", likeCount: 21 },
        { id: 3, message: "Как дела?", likeCount: 21 },
        { id: 4, message: "Как дела?", likeCount: 21 }
    ]},

    dialogPage:
        {dialogsData: [
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
    ],},

    sideBar : [
        {id: 1, name: 'Саша'},
        {id: 2, name: 'Даша'},
        {id: 3, name: 'Вася'},
        {id: 4, name: 'Иван'}
    ], 
    };

export const addPost = (postMessage) => {
    
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree=observer;
}
export default state; */

import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Привет", likeCount: 10 },
        { id: 2, message: "Как дела?", likeCount: 21 },
        { id: 3, message: "Как дела?", likeCount: 21 },
        { id: 4, message: "Как дела?", likeCount: 21 },
      ],
    },

    dialogPage: {
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

      newMessageBody: ''
    },

    sideBar: [
      { id: 1, name: "Саша" },
      { id: 2, name: "Даша" },
      { id: 3, name: "Вася" },
      { id: 4, name: "Иван" },
    ],
  },

  getState() {
    return this._state;
  },

  /*  addPost(postMessage) {
        let newPost = {
            id: 5,
            message: postMessage,
            likeCount: 0
        };

        this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state)
}, */

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch (action) {

    this._state.profilePage = profileReducer (this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer (this._state.dialogPage, action)
    this._state.sideBar = sidebarReducer (this._state.sideBar, action)

    this._rerenderEntireTree(this._state)}
};


window.store = store;

export default store;

