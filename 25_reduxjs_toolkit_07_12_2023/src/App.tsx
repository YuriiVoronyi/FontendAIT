import React from "react";
import "./App.css";
import CounterRTK from "./components/counter/CounterRTK";
import SandwichRTK from "./components/sandwich/SandwichRTK";
import CreateBookRTK from "./components/library/CreateBookRTK";
import BooksPageRTK from "./components/library/BooksPageRTK";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/counter" element={<CounterRTK />} />
          <Route path="/sandwich" element={<SandwichRTK />} />
          <Route path="/library" element={<><CreateBookRTK /><BooksPageRTK /></>} />
          {/* <CounterRTK />
          <SandwichRTK />
          <CreateBookRTK />
          <BooksPageRTK /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;