import {combineReducers} from 'redux';
import AppReducer        from './app-reducer';
import CreatePageReducer from './create-page-reducer';

const reducers = {
  app: AppReducer,
  createPage: CreatePageReducer
};

export default combineReducers(reducers);
