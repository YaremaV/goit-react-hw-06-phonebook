import React from 'react';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';
import './contactlist.css';

function ContactsList({ contacts, onDeleteContacts }) {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getFilteredContacts = (contacts, filter) => {
  const filterCase = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterCase),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;

  const visibleContacts = getFilteredContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(contactsAction.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
