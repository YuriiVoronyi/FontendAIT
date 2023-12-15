import React from "react";

interface IPostProps {
    body: string;
    title: string;
}

const Post: React.FC<IPostProps> = ({ body, title }): JSX.Element => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default Post;