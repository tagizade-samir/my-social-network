import React from 'react'
import loading from '../../../assets/img/loading.gif'

const Preloader = (props) => {
    return (
        <div>
            <img style={{ width: '300px' }} src={loading} />
        </div>
    )
}

export default Preloader