// import { useState, useEffect } from 'react';
import ContactsList from './components/Contactslist/Contactslist';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Layout from './components/Layout/Layout';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Layout>
      <Form />
      <Filter />
      <ContactsList />
    </Layout>
  );
}
