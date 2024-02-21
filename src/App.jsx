import './index.css'
import ContactList from './components/ContactList';
import { useState } from 'react';
import SelectedContent from './components/SelectedContent';

export default function App() {
  const [selectedContactId, setSelectedContactId]=useState(null);
  return (
    <>
    {selectedContactId === null ? (
    <div>Selected Contact View</div> 
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )}
    </>
  );
}



