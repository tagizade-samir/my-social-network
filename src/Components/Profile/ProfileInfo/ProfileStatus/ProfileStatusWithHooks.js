import React, { useState, useEffect } from 'react';
import Classes from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode ? (
                <div>
                    <span 
                        onDoubleClick={activateMode} >
                        {props.status || 'No status'}
                    </span>
                </div>
            ) : (
                    <div>
                        <input
                            onBlur={deactivateEditMode}
                            onChange={onStatusChange}
                            value={status}
                            autoFocus={true} />
                    </div>
                )}
        </div>
    )
}

export default ProfileStatusWithHooks