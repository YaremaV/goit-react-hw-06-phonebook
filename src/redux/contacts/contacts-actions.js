import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContacts = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContacts = contactsId => ({
  type: types.DELETE,
  payload: contactsId,
});

const filter = value => ({
  type: types.FILTER,
  payload: value,
});

export default { addContacts, deleteContacts, filter };
