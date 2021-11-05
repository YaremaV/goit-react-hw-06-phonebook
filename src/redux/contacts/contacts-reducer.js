import { combineReducers } from 'redux';
import initialContacts from '../.././contacts.json';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';

const items = createReducer(initialContacts, {
  'contacts/add': (state, action) => [...state, action.payload],
  'contacts/delete': (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
  'contacts/filter': (_, action) => action.payload,
});
// const items = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
