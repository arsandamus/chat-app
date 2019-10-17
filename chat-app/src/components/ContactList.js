import React from "react";
import Contact from "./Contact";

const users = [
  {
    name:"Felecia Ryan",
    avatar:"https://randomuser.me/api/portraits/men/16.jpg",
    online:true
  },
  {
    name:"Mia Hill",
    avatar:"https://randomuser.me/api/portraits/women/44.jpg",
    online:true
  },
  {
    name:"Jared Bryant",
    avatar:"https://randomuser.me/api/portraits/men/21.jpg",
    online:false
  },
  {
    name:"Shane Collins",
    avatar:"https://randomuser.me/api/portraits/men/6.jpg",
    online:false
  },
  {
    name:"Nina Cunningham",
    avatar:"https://randomuser.me/api/portraits/women/96.jpg",
    online:true
  }
];

const ContactList = () => (
  <div>
    {users.map(item => (
  <Contact name={item.name} avatar={item.avatar} online={item.online}/>
))}
  </div>
);

export default ContactList;