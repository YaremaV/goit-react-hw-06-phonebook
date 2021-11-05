import { combineReducers } from 'redux';
import initialContacts from '../.././contacts.json';
import types from './contacts-types';

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });