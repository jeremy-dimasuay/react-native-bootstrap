import React from 'react';
import renderer from 'react-test-renderer';

import App from '../AppRoot';

describe('<App>', () => {
    it('renders', () => {
        const component = renderer.create(<App />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
