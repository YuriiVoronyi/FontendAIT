// rafce - react arrow function component export

import React from "react";
import Navigation from "./Navigation";

const Header: React.FC<{ changePage: (title: string) => void }> = ({ changePage }) => {
  return (
    <header>
      <Navigation changePage={changePage} />
      <h1>Luke Skywalker</h1>
    </header>
  );
};

export default Header;