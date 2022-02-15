import React from 'react';
import s from './ContactItem.module.css';
const ContactItem = ({ name, number, onClick }) => (
  <>
    <p className={s.nameContact}>{name}:</p>
    <span className={s.numberContact}>{number}</span>
    <button type="button" className={s.buttonDelete} onClick={onClick}>
      Delete
    </button>
  </>
);

export default ContactItem;
