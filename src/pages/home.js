import React, { useEffect, useState } from "react";
import http from "../http";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };
  const deleteUser = (id) => {
    http.delete("/users/" + id).then((res) => {
      fetchAllUsers();
    });
  };

  return (
    <div>
      <h1>All Records</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {users.map((user,index)=>(
    <tr key={user.id}>
        <td>{++index}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <Link className="btn btn-primary" to={{pathname:"/edit/"+user.id}}>Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>
        </td>


    </tr>
   )
   
   
   )}
   
  </tbody>
</table>
    </div>
  );
}
