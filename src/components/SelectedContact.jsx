
import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
        console.log(data); 
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [selectedContactId]);

  const handleBackButtonClick = () => {
    setSelectedContactId(null);
  };

  return (
    <div>
      {contact && (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone Number: {contact.phone}</p>
          <button onClick={handleBackButtonClick}>Back to Contact List</button>
        </div>
      )}
    </div>
  );
};

export default SelectedContact;