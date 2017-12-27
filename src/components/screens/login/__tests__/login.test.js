import React from 'react';
import renderer from 'react-test-renderer';

import { Login } from '../';

function createLogin(props = {}) {
    return (
        <Login
            navigation={{}}
            {...props}
        />
    );
}
describe('<Login>', () => {
    it('renders', () => {
        const component = renderer.create(createLogin());
        expect(component.toJSON()).toMatchSnapshot();
    });
});
