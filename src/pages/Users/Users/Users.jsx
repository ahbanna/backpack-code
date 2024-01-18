// ----------- useState, useEffect, async await, axios, map -----------------

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import SingleUser from "../SingleUser/SingleUser";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setUsers(data);
//       });
//   }, []);

//   // ------Using async await------------
//   // useEffect(() => {
//   //   const loadData = async () => {
//   //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   //     const data = await res.json();
//   //     setUsers(data);
//   //   };
//   //   loadData();
//   // }, []);

//   // --------Using axios-----------
//   // useEffect(() => {
//   //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//   //     console.log(res);
//   //     setUsers(res.data);
//   //   });
//   // }, []);

//   return (
//     <div>
//       <div className="all-users">
//         {users.map((user) => (
//           <SingleUser key={user.id} info={user}></SingleUser>
//         ))}
//         {/* {users.map((user, index) => (
//           <SingleUser key={index} info={user}> </SingleUser>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Users;

// ------------------- useState, useEffect, loading, error, map ---------------

import React, { useEffect, useState } from "react";
import SingleUser from "../Users/SingleUser";
import "./User.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/userss")
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Something went wrong");
        setLoading(false);
      });
    // }, 2000);
  }, []);

  const loadingMessage = <p>Data is loading</p>;
  const errorMessage = <p>Unable to load data</p>;

  return (
    <div>
      <div className="all-users">
        {/* show loading message  */}
        {/* <h3>{loading && loadingMessage}</h3> */}
        {/* show loading spinner  */}
        {loading && <div className="spinner"></div>}
        <h3>{error && errorMessage}</h3>
        {/* <h3>{error}</h3> */}
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
