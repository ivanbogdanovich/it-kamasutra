import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { updateStatusThunk } from '../../../state/profile/actions';

function Status({ status }) {
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [statusLocal, setStatus] = useState(status);

    useEffect(() => {
        setStatus(status)
    }, [status])

    const onChange = (e) => {
        setStatus(e.target.value)
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatusThunk(statusLocal));
    }

    return <div>

        {!editMode &&
            <span onDoubleClick={activateEditMode}>
                {status || "-----"}</span>
        }
        {editMode &&
            <input autoFocus={true}
                onBlur={deActivateEditMode}
                value={statusLocal}
                onChange={onChange} />
        }
    </div>
}

export default Status;
