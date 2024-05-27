import React from "react";
import image from "../images/image.jpeg";


const ContactCard = (props)=>{
    const{id,name,contact}=props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={image} alt="image" />
            <div className="item">
            <div className="header">{name}</div>
            <div> {contact}</div>
            </div>
            <i class="circular trash alternate icon"
            style ={{color:"red",marginTop:"7px"}}></i>
        </div>
    );

};

export default ContactCard;