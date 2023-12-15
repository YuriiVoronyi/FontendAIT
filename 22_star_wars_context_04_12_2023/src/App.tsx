import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { navItems } from "./utils";

// 1. Создание контекста
export const ChangePageContext = createContext((currentPage: string) => {});

function App() {
  const [currentPage, setCurrentPage] = useState<string>(navItems[0]);

  console.log(currentPage);

  const changePage = (newPage: string) => setCurrentPage(newPage);

  return (
    <>
      {/* 2. Передача контекста */}
      <ChangePageContext.Provider value={changePage}>
        <Header changePage={changePage} />
        <Main currentPage={currentPage} />
        <Footer />
      </ChangePageContext.Provider>
    </>
  );
}

export default App;