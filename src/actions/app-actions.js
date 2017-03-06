import * as appConstants from '../constants/app';

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

export function CLEAR(){
    return {
        type: appConstants.APP_CLEAR
    }
}
