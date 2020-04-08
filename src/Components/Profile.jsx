import React from 'react';

const Profile = () => {
    return(
        <div className='profile'>
          <div className='profile_bgImage'>
            <img className='profile_bgImage-img' src='https://images.wallpaperscraft.ru/image/nochnoj_gorod_ogni_noch_165830_1280x720.jpg'></img>
          </div>
          <div className='profile_info'>
            <div className='profile_info_img'>
              <img className='profile_info_img-img' src='https://image.flaticon.com/icons/svg/126/126486.svg'></img>
            </div>
            <div className='profile_info_desc'>
              <div className='profile_info_desc-title'>
                Samir T.
              </div>
              <div className='profile_info_desc_text'>
                <div className='profile_info_desc_text-item'>Date of birth: 19.10.1995</div>
                <div className='profile_info_desc_text-item'>City: baku</div>
                <div className='profile_info_desc_text-item'>Education: DevEducation</div>
                <div className='profile_info_desc_text-item'>WebSite: template.com</div>
              </div>
            </div>
          </div>
          <div className='profile_posts'>
            <div className='profile_posts_head'>
              <div className='profile_posts_head-title'>
                My posts
              </div>
              <form>
                <div className='profile_posts_head_input'>
                    <input className='postInput'></input>
                    <button className='postBtn'>Send</button>
                </div>
              </form>
            </div>
            <div className='profile_posts_main'>
              <div className='profile_posts_main_item'>
                <img className='profile_posts_main_item-img'></img>
                <p className='profile_posts_main_item-text'></p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Profile