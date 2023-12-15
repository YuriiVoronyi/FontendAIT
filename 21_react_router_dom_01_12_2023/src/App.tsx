import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Layout from "./components/Layout";
import Comments from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Posts />
    // </div>
  );
}

export default App;