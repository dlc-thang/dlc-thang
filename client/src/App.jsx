import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from "./routes/Home";
import Users from "./routes/Users";
import Coordinator from "./routes/Coordinator";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/users' element={<Navigation />}>
        <Route index element={<Users />} />
      </Route>
      <Route path='/coordinator' element={<Navigation />}>
        <Route index element={<Coordinator />} />
      </Route>
    </Routes>
  );
}

export default App;
