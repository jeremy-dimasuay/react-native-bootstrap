import { AppNavigator } from 'navigators/app';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Welcome'));

export default function nav(state = initialState, action) {
    let nextState;
    switch (action.routeName) {
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
    }

    return nextState || state;
}

