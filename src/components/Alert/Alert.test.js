import React from 'react';
import { render } from '@testing-library/react';
import Alert from './index';


test('AgeField component should be rendered without error', () => {
    const { getByTestId } = render(
        <Alert msgStats={{ status: 1, message: "user has been created successfully."}} />
    );
    const successDom = getByTestId('alert-success');
    expect(successDom.textContent).toContain("has been created")
});
