import React from 'react';
import { connect } from 'react-redux';
import s from './filter.module.css';
import ContactsActions from '../../redux/contacts/contacts-actions';

function Filter({ value, onHandleFilter }) {
  return (
    <>
      <h2>Contacts</h2>
      <label className={s.filter}>
        Find contacts by name
        <input type="text" value={value} onChange={onHandleFilter} />
      </label>
    </>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onHandleFilter: event => dispatch(ContactsActions.filter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
