// App.jsx
import './index.css'
import React, { useState } from 'react';
import SelectedContact from './components/SelectedContent';
import ContactList from './components/ContactList';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(1);


  return (
    <>
      <div>
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
        <ContactList setSelectedContactId={setSelectedContactId} />
      </div>
    </>
  );
}




