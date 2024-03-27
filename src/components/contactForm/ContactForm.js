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
    <input id="name" type="text" value={name} onChange={({target}) => setName(target.value)} />
    <input id="phone" type="tel" value={phone} onChange={({target}) => setPhone(target.value)} />
    <input id="email" type="email" value={email} onChange={({target}) => setEmail(target.value)} />
    <input type="submit" />
    </form>
    </>
  );
};

