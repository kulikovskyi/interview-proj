import * as CPConstants from '../constants/create-page-constants';

const initSate = {
    image: null,
    newTooltipPosition: {
        x: null,
        y: null
    },
    newTooltipText: '',
    tooltips: [],
    editTooltip: null
};

export default function (state = initSate, action) {
    switch (action.type) {
        case CPConstants.CP_SET_IMAGE:
            return Object.assign({}, state, {
                image: action.image
            });
        case CPConstants.CP_SET_TOOLTIPS:
            return Object.assign({}, state, {
                tooltips: action.tooltips
            });
        case CPConstants.CP_SET_TOOLTIP_POSITION:
            return Object.assign({}, state, {
                newTooltipPosition: action.position
            });
        case CPConstants.CP_SET_TOOLTIP_TEXT:
            return Object.assign({}, state, {
                newTooltipText: action.text
            });
        case CPConstants.CP_ADD_TOOLTIP:
            return Object.assign({}, state, {
                tooltips: [...state.tooltips, action.tooltip]
            });
        case CPConstants.CP_DELETE_TOOLTIP:
            return Object.assign({}, state, {
                tooltips: state.tooltips.filter(t => t.id !== action.id)
            });
        case CPConstants.CP_SET_EDIT_TOOLTIP:
            return Object.assign({}, state, {
                editTooltip: _.find(state.tooltips, {id: action.id})
            });
        case CPConstants.CP_SET_EDIT_TOOLTIP_TEXT:
            return Object.assign({}, state, {
                editTooltip: Object.assign({}, state.editTooltip, {
                    text: action.text
                })
            });
        case CPConstants.CP_SET_EDIT_TOOLTIP_POSITION:
            return Object.assign({}, state, {
                editTooltip: Object.assign({}, state.editTooltip, {
                    position: action.position
                })
            });
        case CPConstants.CP_SAVE_EDIT_TOOLTIP:
            return Object.assign({}, state, {
                tooltips: state.tooltips.map(t => {
                    if (t.id === state.editTooltip.id) {
                        return state.editTooltip;
                    }
                    return t;
                }),
                editTooltip: null
            });
        case CPConstants.CP_DISCARD_EDIT_TOOLTIP:
            return Object.assign({}, state, {
                editTooltip: null
            });
        case CPConstants.CP_CLEAR:
            return initSate;
        default:
            return state;
    }
}
