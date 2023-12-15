import React from "react";

interface IUserProps {
    i: number;
    id: number;
    name: string;
    phone: string;
    company: {
        name: string
    }
}

const User: React.FC<IUserProps> = ({ i, id, name, phone, company: { name: companyName } }) => {
  return (
    <li>
      {i + 1}. userID: {id}, userName: {name}, userPhone: {phone}, userCompany: {companyName}
    </li>
  );
};

export default User;