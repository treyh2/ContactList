// ContactList.jsx
import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  const [ShowList, setShowList] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContacts();
  }, []);

    const handleContactClick = (contactId) => {
      setSelectedContactId(contactId);
      setShowList(false);
    }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Names:</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
        ))}
      </tbody>
    </table>
  );
}