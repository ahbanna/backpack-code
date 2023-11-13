import React from "react";

const SingleUser = (props) => {
  const { name, email, phone, address } = props.info;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address.city}</p>
    </div>
  );
};

export default SingleUser;
