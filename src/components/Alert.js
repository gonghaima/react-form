import React from 'react';
import { MSG_STATUS } from '../constants';

export default ({ msgStats }) => {
    switch (msgStats) {
        case MSG_STATUS.SUCCESS:
            return <span className="helper-text-success">User: 3849172 has been created</span>
        case MSG_STATUS.FAILURE:
            return <span className="helper-text-failure">Something went wrong. Please try again.</span>
        default:
            return null;
    }
}