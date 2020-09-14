import React from 'react';
import { render } from '@testing-library/react';
import AgeField from './index';
import { STATUS } from '../../constants'

test('AgeField component should be rendered without error', () => {
    const { getAllByPlaceholderText } = render(
        <AgeField
            onChange={() => { }}
            onKeyDown={() => { }}
            day={{ day: 3 }}
            month={{ month: 11 }}
            year={{ year: 1988 }}
            stats={{ stats: 2 }}
            STATUS={STATUS} />
    );
    const renderedEle = getAllByPlaceholderText(/Day/i);
    const ageElement = renderedEle[0];
    const ageHtml = renderedEle[0];

    expect(ageElement).toBeInTheDocument();
    expect(ageHtml.id).toEqual('Day');
});
