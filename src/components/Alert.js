import React from 'react';

export default ({ msgStats, MSG_STATUS }) => {
    switch (msgStats) {
        case MSG_STATUS.SUCCESS:
            return <span className="helper-text-success">User: 3849172 has been created</span>
        case MSG_STATUS.FAILURE:
            return <span className="helper-text-failure">Something went wrong. Please try again.</span>
        default:
            return null;
    }
}