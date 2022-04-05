import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import User from "./routes/User";
import Coordinator from "./routes/Coordinator";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<User />} />
      </Route>
      <Route path='/coordinator' element={<Navigation />}>
        <Route index element={<Coordinator />} />
      </Route>
    </Routes>
  );
}

export default App;
