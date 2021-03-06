import * as appConstants from '../constants/app';

export function SET_COMPOSITIONS(compositions){
    return {
        type: appConstants.APP_SET_COMPOSITIONS,
        compositions
    }
}

export function ADD_COMPOSITION(image, tooltips){

    const composition = {
        image,
        tooltips,
        id: _.uniqueId('composition_')
    };

    return {
        type: appConstants.APP_ADD_COMPOSITION,
        composition
    }
}

export function DELETE_COMPOSITION(id){
    return {
        type: appConstants.APP_DELETE_COMPOSITION,
        id
    }
}

export function EDIT_COMPOSITION(composition){
    return {
        type: appConstants.APP_EDIT_COMPOSITION,
        composition
    }
}

export function CLEAR(){
    return {
        type: appConstants.APP_CLEAR
    }
}