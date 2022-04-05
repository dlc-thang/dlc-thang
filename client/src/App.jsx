import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from "./routes/Home";
import Users from "./routes/Users";
import Oracle from "./routes/Oracle";
import { useState } from "react";
function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/users' element={<Navigation />}>
        <Route index element={<Users />} />
      </Route>
      <Route path='/oracle' element={<Navigation />}>
        <Route index element={<Oracle />} />
      </Route>
    </Routes>
  );
}

export default App;
