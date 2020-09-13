import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { updateStatusThunk } from '../../../state/profile/actions';

function Status({ status }) {
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [statusLocal, setStatus] = useState(status);

    useEffect(() => {
        setStatus(status)
    }, [status])

    function onChange(e) {
        setStatus(e.target.value)
    }

    function activateEditMode() {
        setEditMode(true);
    }

    function deActivateEditMode() {
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

Status.propTypes = {
    status: PropTypes.string,
}

Status.defaultProps = {
    status: '',
}

export default Status;
