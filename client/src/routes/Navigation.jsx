import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          DLC Thang
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/'>
            User
          </Link>
          <Link className='nav-link' to='/coordinator'>
            Coordinator
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
