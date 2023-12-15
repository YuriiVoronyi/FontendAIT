import React, { useEffect, useState } from "react";
import User from "./User";

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  id: number;
  name: string;
  company: ICompany;
  phone: string;
}

const Users: React.FC = (): JSX.Element | null => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  if (!users) {
    return null;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(({ company, id, name, phone }, i) => (
          <User key={i} company={company} id={id} name={name} phone={phone} i={i}/>
        ))}
      </ul>
    </div>
  );
};

export default Users;