import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit} >
    <input id="name" type="text" value={name} onChange={() => setName(e.target.value)} />
    <input id="phone" type="tel" value={phone} onChange={() => setPhone(e.target.value)} />
    <input id="email" type="email" value={email} onChange={() => setEmail(e.target.value)} />
    <input type="submit" />
    </form>
    </>
  );
};

