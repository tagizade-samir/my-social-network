let State = {
  profilePage: {
    postsData: [
      { id: '1', text: 'Hello', likeCount: '12' },
      { id: '2', text: 'world', likeCount: '2' },
      { id: '3', text: 'That is', likeCount: '4' },
      { id: '4', text: 'nuts!', likeCount: '7' },
    ],
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
    ]
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
}

export default State