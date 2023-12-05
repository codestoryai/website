import React from "react";
import Author from "@/interfaces/author";

interface AuthorProps {
  author: Author;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <div>
      <img src={author.picture} alt={author.name} />
      <div>
        <h3>{author.name}</h3>
      </div>
    </div>
  );
};

export default Author;
