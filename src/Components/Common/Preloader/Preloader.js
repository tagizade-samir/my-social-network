import React from 'react'
import loading from '../../../assets/img/loading.gif'

const Preloader = (props) => {
    return (
        <div style={{margin: 'auto', width: '100%'}}>
            <img style={{ width: '300px'}} src={loading} />
        </div>
    )
}

export default Preloader