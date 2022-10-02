import profileReducer, { addPostAC, deletePost } from "./profile-reducer";

let state = {
    postsData: [
      { id: 1, message: "Привет", likeCount: 10 },
      { id: 2, message: "Как дела?", likeCount: 21 },
      { id: 3, message: "Как дела?", likeCount: 21 },
      { id: 4, message: "Как дела?", likeCount: 21 },
    ],
  };

it("length of postData should be incremented", () => {

  //1. Test data/ Подготавливаем необходимые данные для теста

  let action = addPostAC("pavelsiba");

  //2. action - делаем действие которое должно произойти
  let newState = profileReducer(state, action);

  //3.expectation - пишем то что мы ожидаем получить
  expect(newState.postsData.length).toBe(5);
  expect(newState.postsData[4].message).toBe('pavelsiba');

});

it("message should be correct", () => {

  //1. Test data/ Подготавливаем необходимые данные для теста

  let action = addPostAC("pavelsiba");

  //2. action - действие которое должно произойти
  let newState = profileReducer(state, action);

  //3.expectation - пишем то что мы ожидаем получить
  expect(newState.postsData[4].message).toBe('pavelsiba');

});

it("after deleting length of message should be decrement", () => {
 
  //1. Test data/ Подготавливаем необходимые данные для теста

  let action = deletePost(1);

  //2. action - действие которое должно произойти
  let newState = profileReducer(state, action);

  //3.expectation - пишем то что мы ожидаем получить
  expect(newState.postsData.length).toBe(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  
  //1. Test data/ Подготавливаем необходимые данные для теста

  let action = deletePost(1000);

  //2. action - действие которое должно произойти
  let newState = profileReducer(state, action);

  //3.expectation - пишем то что мы ожидаем получить
  expect(newState.postsData.length).toBe(4);
});




