import { Outlet } from 'react-router-dom';

const Coordinator = () => {
  return (
    <div>
      <Outlet />
      Coordinator
    </div>
  );
}

export default Coordinator;