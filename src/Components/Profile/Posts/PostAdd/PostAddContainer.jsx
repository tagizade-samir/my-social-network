import PostAdd from './PostAdd'
import { addPostActioncreator, updateNewPosrTextAction } from '../../../../Redux/profilePageReducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    postAddOnChange: (text) => {
      dispatch(updateNewPosrTextAction(text))
      },
      addP: () => {
        dispatch(addPostActioncreator())
      }
  }
}

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd)

export default PostAddContainer