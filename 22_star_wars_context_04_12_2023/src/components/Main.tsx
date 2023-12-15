import React from "react";
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import { navItems } from "../utils";
import AboutMe from "../pages/AboutMe";
import StarWars from "../pages/StarWars";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Main: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  switch(currentPage) {
    case navItems[1]:
      return <AboutMe />;
    case navItems[2]:
      return <StarWars />;
    case navItems[3]:
      return <Contact />
    default:
      return <Home />;
  }
};

export default Main;

// rce
// import React, { Component } from 'react'

// export class Main extends Component {
//   render() {
//     return (
//       <div>Main</div>
//     )
//   }
// }

// export default Main