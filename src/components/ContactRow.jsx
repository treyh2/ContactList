import React from "react";

export default function ContactRow ({ setSelectedContactId, contact }) {
 const handleContactClick = () => {
    setSelectedContactId(contact.id);
};
return (
  <tr
    onClick={setSelectedContactId(contact.id)}>
    <td>{contact.name}</td>
  </tr>
);
}