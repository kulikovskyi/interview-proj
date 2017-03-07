import * as AppConstants from '../constants/app.js';

const initSate = {
    compositions: []
};

export default function App(state = initSate, action) {
    switch (action.type) {
        case AppConstants.APP_SET_COMPOSITIONS:
            return Object.assign({}, state, {
                compositions: action.compositions
            });
        case AppConstants.APP_ADD_COMPOSITION:
            return Object.assign({}, state, {
                compositions: [...state.compositions, action.composition]
            });
        case AppConstants.APP_DELETE_COMPOSITION:
            return Object.assign({}, state, {
                compositions: state.compositions.filter(t => t.id !== action.id)
            });
        case AppConstants.APP_EDIT_COMPOSITION:
            return Object.assign({}, state, {
                compositions: state.compositions.map(t => {
                    if (t.id === action.composition.id) {
                        return action.composition;
                    }
                    return t;
                })
            });
        case AppConstants.APP_CLEAR:
            return initSate;
        default:
            return state;
    }
}
