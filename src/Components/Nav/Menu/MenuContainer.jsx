import React from 'react';
import Classes from './Menu.module.css'
import Item from './Item/Item.jsx'
import StoreContext from '../../../storeContext';
import Menu from './Menu'
import {connect} from 'react-redux'

// const MenuContainer = (props) => {

//   // let menu = props.navItems.map(item => <Item link={item.link} name={item.name} />)

//   return (
//     <StoreContext.Consumer> 
//     {(store) => {
//       let menu = store.getState().nav.navItems.map(item => <Item link={item.link} name={item.name} />)

//       return (<Menu menu={menu} />)
//     }}
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    menu: state.nav.navItems.map(item => <Item link={item.link} name={item.name} />)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      
  }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)


export default MenuContainer;