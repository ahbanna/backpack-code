import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "../SingleUser/SingleUser";


const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  // ------Using async await------------
  // useEffect(() => {
  //   const loadData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //   };
  //   loadData();
  // }, []);

  // --------Using axios-----------
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     console.log(res);
  //     setUsers(res.data);
  //   });
  // }, []);

  return (
    <div>
      <div className="all-users">
        {users.map((user) => (
          <SingleUser key={user.id} info={user}></SingleUser>
        ))}
        {/* {users.map((user, index) => (
          <SingleUser key={index} info={user}> </SingleUser>
        ))} */}
      </div>
    </div>
  );
};

export default Users;
