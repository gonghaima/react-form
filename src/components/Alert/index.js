import React from 'react';
import { MSG_STATUS } from '../../constants';

export default ({ msgStats }) => {
    switch (msgStats.status) {
        case MSG_STATUS.SUCCESS:
            return <span data-testid="alert-success" className="helper-text-success">{msgStats.message}</span>
        case MSG_STATUS.FAILURE:
            return <span data-test-id="alert-failure" className="helper-text-failure">Something went wrong. Please try again.</span>
        default:
            return null;
    }
}