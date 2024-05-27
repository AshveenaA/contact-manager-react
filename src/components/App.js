import React ,{useState,useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
//import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

import './App.css';

function App() {
  /*//renderinglist
  const contacts=[
    {
      id: "1",
      name: "Ashveena",
      contact: "9442570123"
    },
    {
      id: "2",
      name: "Ash",
      contact: "1758934"
    },
    {
      id: "2",
      name: "veena",
      contact: "242324567"
    },
  ];*/
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setcontacts]=useState([]);

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts])

  useEffect(()=> {
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setcontacts(retrieveContacts);
  },[]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setcontacts([...contacts,contact]);
  };

  return (

    <div className="ui container">
      <Header />
    <AddContact addContactHandler={addContactHandler}/>
    
    <ContactList contacts={contacts}/>
  
    </div>
  );
  //pass data as props in contactlist
  
}

export default App;
