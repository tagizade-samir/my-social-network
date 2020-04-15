const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE',
      UPDATE_NEW_MSG = 'UPDATE-NEW-MSG'

let store = {
  _State: {
    profilePage: {
      postsData: [
        { id: '1', text: 'Hello', likeCount: '12' },
        { id: '2', text: 'world', likeCount: '2' },
        { id: '3', text: 'That is', likeCount: '4' },
      ],
      newPostText: 'Hello bro'
    },
    dialogsPage: {
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
      newMessage: 'Hi Hi Hi'
    },
    nav: {
      navItems: [
        {name: 'Pofile', link: 'profile'},
        {name: 'Dialogs', link: 'dialogs'},
        {name: 'News', link: 'news'},
        {name: 'Music', link: 'music'},
        {name: 'Settings', link: 'settings'},
      ],
      navFriends: [
        {name: 'Saida', id: '2'},
        {name: 'Farida', id: '3'},
        {name: 'Eldar', id: '4'},
      ]
    }
  },
  _callSubscriber() {},

  subscribe (observer) {
    this._callSubscriber  = observer
  },
  getState(){
    return this._State
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        text: this._State.profilePage.newPostText,
        likeCount: 0
      }
    
      this._State.profilePage.postsData.push(newPost)
      this._State.profilePage.newPostText = ''
      this._callSubscriber(this._State)
    } else if (action.type === UPDATE_NEW_POST_TEXT ) {
      this._State.profilePage.newPostText = action.newText
      this._callSubscriber(this._State)
    } else if (action.type === ADD_NEW_MESSAGE) {
      let newMsg = {
        id: 5,
        text: this._State.dialogsPage.newMessage
      }
      console.log(this._State.dialogsPage.newMessage)
      this._State.dialogsPage.messageData.push(newMsg)
      this._State.dialogsPage.newMessage = ''
      this._callSubscriber(this._State)
    } else if (action.type === UPDATE_NEW_MSG) {
      this._State.dialogsPage.newMessage = action.msg
      this._callSubscriber(this._State)
    }
  }
}

export const addPostActioncreator = () => ({ type: ADD_POST })
export const updateNewPosrTextAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
 })
 export const updateMsgAction = (text) => ({
   type: UPDATE_NEW_MSG,
   msg: text
 })
 export const addNewMsgActionCreator = () => ({type: ADD_NEW_MESSAGE})


export default store