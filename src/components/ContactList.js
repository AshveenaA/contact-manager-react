import React from "react";
import ContactCard from "./ContactCard";

//functional component
const ContactList = (props)=> {
    console.log(props);
//access the data props passed
    const renderContactList =props.contacts.map((contact)=>{
        return <ContactCard contact={contact} />;
        
    });
    return <div className="ui celled list">
       { renderContactList}
       </div>;
    
};

export default ContactList;