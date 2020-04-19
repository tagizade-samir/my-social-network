let initialState = {
    navItems: [
        {name: 'Pofile', link: 'profile'},
        {name: 'Dialogs', link: 'dialogs'},
        {name: 'News', link: 'news'},
        {name: 'Music', link: 'music'},
        {name: 'Settings', link: 'settings'},
        {name: 'Users', link: 'users'},
      ],
      navFriends: [
        {name: 'Saida', id: '2'},
        {name: 'Farida', id: '3'},
        {name: 'Eldar', id: '4'},
      ]
}

const navReducer = (state = initialState, action) => {
    

    return state
}

export default navReducer