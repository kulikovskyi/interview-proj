import * as CPConstants from '../constants/create-page-constants';

export function SET_IMAGE(image){
    return {
        type: CPConstants.CP_SET_IMAGE,
        image
    }
}

export function SET_TOOLTIPS(tooltips){
    return {
        type: CPConstants.CP_SET_TOOLTIPS,
        tooltips
    }
}

export function SET_TOOLTIP_POSITION(position){
    return {
        type: CPConstants.CP_SET_TOOLTIP_POSITION,
        position
    }
}

export function SET_TOOLTIP_TEXT(text){
    return {
        type: CPConstants.CP_SET_TOOLTIP_TEXT,
        text
    }
}

export function ADD_TOOLTIP(position, text){

    const tooltip = {
        position,
        text,
        id: _.uniqueId('tooltip_')
    };

    return {
        type: CPConstants.CP_ADD_TOOLTIP,
        tooltip
    }
}

export function DELETE_TOOLTIP(id){
    return {
        type: CPConstants.CP_DELETE_TOOLTIP,
        id
    }
}

export function SET_EDIT_TOOLTIP(id){
    return {
        type: CPConstants.CP_SET_EDIT_TOOLTIP,
        id
    }
}

export function SET_EDIT_TOOLTIP_TEXT(text){
    return {
        type: CPConstants.CP_SET_EDIT_TOOLTIP_TEXT,
        text
    }
}

export function SET_EDIT_TOOLTIP_POSITION(position){
    return {
        type: CPConstants.CP_SET_EDIT_TOOLTIP_POSITION,
        position
    }
}

export function SAVE_EDIT_TOOLTIP(){
    return {
        type: CPConstants.CP_SAVE_EDIT_TOOLTIP
    }
}

export function DISCARD_EDIT_TOOLTIP(){
    return {
        type: CPConstants.CP_DISCARD_EDIT_TOOLTIP
    }
}

export function CLEAR(){
    return {
        type: CPConstants.CP_CLEAR
    }
}
