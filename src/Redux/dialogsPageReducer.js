const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE',
  UPDATE_NEW_MSG = 'UPDATE-NEW-MSG'

let initialState = {
  dialogsData: [
    { id: '1', name: 'Samir' },
    { id: '2', name: 'Saida' },
    { id: '3', name: 'Farida' },
    { id: '4', name: 'Eldar' },
    { id: '5', name: 'Guney' },
    { id: '6', name: 'Izzet' },
    { id: '7', name: 'Roza' },
  ],
  messageData: [
    { id: '1', text: 'Hello, this is my first message' },
    { id: '2', text: 'I am glad to see this' },
    { id: '3', text: 'You are doing great' },
    { id: '4', text: 'Thanks, that really means a lot' },
  ],
}

const dialogsPageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMsg = {id: 5, text: action.text}

      return {
        ...state,
        messageData: [...state.messageData, newMsg],
      }
    case UPDATE_NEW_MSG:
      return {
        ...state,
        newMessage: action.msg
      }
    default:
      return state
  }
}

// export const updateMsgAction = (text) => ({
//   type: UPDATE_NEW_MSG,
//   msg: text
// })
export const addNewMsgActionCreator = (text) => ({ type: ADD_NEW_MESSAGE, text })

export default dialogsPageReducer