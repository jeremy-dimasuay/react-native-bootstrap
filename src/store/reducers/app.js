const initialState = {
    greeting: 'Hello world!'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            break;
        default:
            return state;
    }

    return state;
};
